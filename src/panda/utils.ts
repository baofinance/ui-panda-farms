import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import _ from 'lodash'

import { Panda } from './Panda'
import { Contract } from 'web3-eth-contract'
import { Farm } from '../contexts/Farms'

import erc20Abi from './lib/abi/erc20.json'
import oracles from './lib/oracles'
import { AbiItem } from 'web3-utils'
const MASTER_CHEF_ADDRESS = '0x9942cb4c6180820E6211183ab29831641F58577A'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const getMasterChefAddress = (pnda: Panda): string => {
  return pnda && pnda.masterChefAddress
}

export const getWbnbPriceAddress = (pnda: Panda): string => {
  return pnda && pnda.wbnbPriceAddress
}

export const getPandaPriceAddress = (pnda: Panda): string => {
  return pnda && pnda.pndaPriceAddress
}

export const getPandaAddress = (pnda: Panda): string => {
  return pnda && pnda.pndaAddress
}

export const getWbnbContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.wbnb
}

export const getWbnbPriceContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.wbnbPrice
}

export const getPandaPriceContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.pndaPrice
}

export const getMasterChefContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.masterChef
}
export const getPandaContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.panda
}

export const getBambooStakingContract = (pnda: Panda): Contract => {
  return pnda && pnda.contracts && pnda.contracts.bambooStaking
}

export const getRhinoContract = (
  pnda: Panda | undefined,
): Contract | undefined => {
  return pnda?.contracts.rhino
}

export const getRhinoStakingContract = (
  pnda: Panda | null | undefined,
): Contract | undefined => {
  return pnda?.contracts.rhinoStaking
}

export const getFarms = (pnda: Panda): Farm[] => {
  return pnda
    ? pnda.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenDecimals,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
          refUrl,
          poolType,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenDecimals,
          tokenSymbol,
          tokenContract,
          earnToken: 'pnda',
          earnTokenAddress: pnda.contracts.panda.options.address,
          icon,
          refUrl,
          poolType,
        }),
      )
    : []
}

export const getPoolWeight = async (
  masterChefContract: Contract,
  pid: number,
): Promise<BigNumber> => {
  const [{ allocPoint }, totalAllocPoint] = await Promise.all([
    masterChefContract.methods.poolInfo(pid).call(),
    masterChefContract.methods.totalAllocPoint().call(),
  ])

  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (
  masterChefContract: Contract,
  pid: number,
  account: string,
): Promise<BigNumber> => {
  return masterChefContract.methods.pendingReward(pid, account).call()
}

export const getLockedEarned = async (
  pndaContract: Contract,
  account: string,
): Promise<BigNumber> => {
  return pndaContract.methods.lockOf(account).call()
}

export const decimate = (bigNumber: BigNumber, decimals = 18) =>
  bigNumber.div(new BigNumber(10).pow(decimals))

interface PriceOracle {
  token: string,
  address: string,
  contract: Contract,
}

const getOraclePrice = async (tokenSymbol: string, priceOracles: Array<PriceOracle>) => {
  const oracle = _.find(priceOracles, { token: tokenSymbol })

  const [tokenPrice, tokenDecimals] = await Promise.all([
    oracle.contract.methods.latestAnswer().call(),
    oracle.contract.methods.decimals().call(),
  ])

  return [tokenPrice, tokenDecimals]
}

export const getPandaPriceLink = async (
  pnda: Panda,
  masterChefContract: Contract,
) => {
  const [resultA, resultB, resultC, resultD, resultE] = await Promise.all([
    getTotalLPUSDValue(0, masterChefContract, pnda, true),
    getTotalLPUSDValue(1, masterChefContract, pnda, true),
    getTotalLPUSDValue(2, masterChefContract, pnda, true),
    getTotalLPUSDValue(3, masterChefContract, pnda, true),
    getTotalLPUSDValue(4, masterChefContract, pnda, true),
  ])

  return resultA.lockedUsd
    .plus(resultB.lockedUsd)
    .plus(resultC.lockedUsd)
    .plus(resultD.lockedUsd)
    .plus(resultE.lockedUsd)
    .div(5)
}

export const getTotalLPUSDValue = async (
  pid: number,
  masterChefContract: Contract,
  pnda: Panda,
  returnNonOraclePrice: boolean = false,
): Promise<{
  pid: number
  lockedUsd: BigNumber
  reward: BigNumber
}> => {
  const { web3 } = pnda
  const supportedPools = getFarms(pnda)
  const pool = _.find(supportedPools, { pid })
  const { lpContract } = pool
  const priceOracles = oracles(web3)

  // Special case: Single asset LP
  if (pool.pid === 5 || pool.pid === 6) {
    const [token0, stakedLPRaw, reward] = await Promise.all([
      lpContract.methods.symbol().call(),
      lpContract.methods.balanceOf(MASTER_CHEF_ADDRESS).call(),
      masterChefContract.methods.getNewRewardPerBlock(pid + 1).call(),
    ])

    const stakedLP = decimate(new BigNumber(stakedLPRaw))
    const [rawTokenPrice, tokenDecimals] = await getOraclePrice(
      token0,
      priceOracles,
    )
    const tokenPrice = decimate(new BigNumber(rawTokenPrice), tokenDecimals)
    const lockedUsd = tokenPrice.times(stakedLP)

    return { pid, lockedUsd, reward: decimate(new BigNumber(reward)) }
  }

  // Get token addresses from LP Contract
  const [token0, token1] = await Promise.all([
    lpContract.methods.token0().call(),
    lpContract.methods.token1().call(),
  ])

  // Create token contracts
  const token0Contract = new web3.eth.Contract(erc20Abi as AbiItem[], token0)
  const token1Contract = new web3.eth.Contract(erc20Abi as AbiItem[], token1)

  // Get token symbols/decimals and LP contract reserves
  const [
    token0Symbol,
    token0Decimals,
    token1Symbol,
    token1Decimals,
    reserves,
    reward,
  ] = await Promise.all([
    token0Contract.methods.symbol().call(),
    token0Contract.methods.decimals().call(),
    token1Contract.methods.symbol().call(),
    token1Contract.methods.decimals().call(),
    lpContract.methods.getReserves().call(),
    masterChefContract.methods.getNewRewardPerBlock(pid + 1).call(),
  ])

  // Check which underlying asset inside of the LP Token has a price oracle
  const oracleToken = _.find(priceOracles, { token: token0Symbol })
  const [oracleTokenPrice, oracleTokenDecimals] = oracleToken
      ? await getOraclePrice(token0Symbol, priceOracles)
      : await getOraclePrice(token1Symbol, priceOracles)

  const lockedUsd = decimate(new BigNumber(reserves[oracleToken ? 0 : 1]))
    .times(
      decimate(new BigNumber(oracleTokenPrice), oracleTokenDecimals).toNumber(),
    )
    .times(2)

  if (returnNonOraclePrice) {
    const token = oracleToken ? 1 : 0
    const nonOraclePrice = lockedUsd.div(2).div(
      decimate(
        new BigNumber(reserves[token]),
        oracleToken ? token1Decimals : token0Decimals,
      ),
    )

    return { pid, lockedUsd: nonOraclePrice, reward: null }
  } else
    return { pid, lockedUsd, reward: decimate(new BigNumber(reward)) }
}

export const getTotalLPWbnbValue = async (
  masterChefContract: Contract,
  wbnbContract: Contract,
  lpContract: Contract,
  tokenContract: Contract,
  tokenDecimals: number,
  pid: number,
): Promise<{
  tokenAmount: BigNumber
  wbnbAmount: BigNumber
  totalWbnbValue: BigNumber
  tokenPriceInWbnb: BigNumber
  poolWeight: BigNumber
}> => {
  const [
    tokenAmountWholeLP,
    balance,
    totalSupply,
    lpContractWbnb,
    poolWeight,
  ] = await Promise.all([
    tokenContract.methods.balanceOf(lpContract.options.address).call(),
    lpContract.methods.balanceOf(masterChefContract.options.address).call(),
    lpContract.methods.totalSupply().call(),
    wbnbContract.methods.balanceOf(lpContract.options.address).call(),
    getPoolWeight(masterChefContract, pid),
  ])

  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWbnbWorth = new BigNumber(lpContractWbnb)
  const totalLpWbnbValue = portionLp.times(lpWbnbWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wbnbAmount = new BigNumber(lpContractWbnb)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wbnbAmount,
    totalWbnbValue: totalLpWbnbValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWbnb: wbnbAmount.div(tokenAmount),
    poolWeight: poolWeight,
  }
}

export const approve = async (
  lpContract: Contract,
  masterChefContract: Contract,
  account: string,
): Promise<string> => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (
  masterChefContract: Contract,
  pid: number,
  amount: string,
  account: string,
  ref: string,
): Promise<string> => {
  return masterChefContract.methods
    .deposit(pid, ethers.utils.parseUnits(amount, 18), ref)
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (
  masterChefContract: Contract,
  pid: number,
  amount: string,
  account: string,
  ref: string,
): Promise<string> => {
  return masterChefContract.methods
    .withdraw(pid, ethers.utils.parseUnits(amount, 18), ref)
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (
  masterChefContract: Contract,
  pid: number,
  account: string,
): Promise<string> => {
  return masterChefContract.methods
    .claimReward(pid)
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (
  masterChefContract: Contract,
  pid: number,
  account: string,
): Promise<BigNumber> => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const getWbnbPrice = async (pnda: Panda): Promise<BigNumber> => {
  const wbnbPriceContract = getWbnbPriceContract(pnda)
  const amount = await wbnbPriceContract.methods.latestAnswer().call()
  return new BigNumber(amount)
}

export const getPandaPrice = async (pnda: Panda): Promise<BigNumber> => {
  // FIXME: re-assess once price oracle is deployed, or use pandaswap rates
  return new BigNumber(0)
  // const addr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  // const amount = await pnda.contracts.pndaPrice.methods
  //   .consult(addr.toString(), 1)
  //   .call()
  // return new BigNumber(amount)
}

export const getPandaSupply = async (pnda: Panda): Promise<BigNumber> => {
  return new BigNumber(await pnda.contracts.panda.methods.totalSupply().call())
}

export const getBambooSupply = async (pnda: Panda): Promise<BigNumber> => {
  const bambooStakingContract = getBambooStakingContract(pnda)
  return new BigNumber(await bambooStakingContract.methods.totalSupply().call())
}

export const getRhinoSupply = async (pnda: Panda): Promise<BigNumber> => {
  const rhinoContract = getRhinoContract(pnda)
  return new BigNumber(await rhinoContract.methods.totalSupply)
}

export const getReferrals = async (
  masterChefContract: Contract,
  account: string,
): Promise<string> => {
  return await masterChefContract.methods.getGlobalRefAmount(account).call()
}

export function getRefUrl(): string {
  let refer = '0x0000000000000000000000000000000000000000'
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.has('ref')) {
    refer = urlParams.get('ref')
  }
  console.log(refer)

  return refer
}

export const redeem = async (
  masterChefContract: Contract,
  account: string,
): Promise<string> => {
  const now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx: { transactionHash: string }) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}

export const enter = async (
  contract: Contract | undefined,
  amount: string,
  account: string,
): Promise<string> => {
  return contract?.methods
    .enter(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const leave = async (
  contract: Contract,
  amount: string,
  account: string,
): Promise<string> => {
  return contract.methods
    .leave(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const deposit = async (
  contract: Contract,
  depositTokenAddress: string,
  amount: string,
  account: string,
  tokenDecimals = 18,
): Promise<string> => {
  const depositAmount = new BigNumber(amount)
    .times(new BigNumber(10).pow(tokenDecimals))
    .toString()
  return contract.methods
    .deposit(depositTokenAddress, depositAmount)
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const withdraw = async (
  contract: Contract,
  withdrawTokenAddress: string,
  account: string,
): Promise<string> => {
  return contract.methods
    .withdraw(withdrawTokenAddress)
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: string }) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getWithdrawableBalance = async (
  rhinoStakingContract: Contract,
  account: string,
  tokenAddress: string,
): Promise<BigNumber> => {
  try {
    const amount = await rhinoStakingContract.methods
      .withdrawableBalance(account, tokenAddress)
      .call()
    console.log('withdrawableBalance', amount)
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const swapWithFee = async (
  rhinoStakingContract: Contract,
  fromTokenAddress: string,
  toTokenAddress: string,
): Promise<BigNumber> => {
  try {
    const amount = await rhinoStakingContract.methods
      .swapWithFee(fromTokenAddress, toTokenAddress)
      .call()
    console.log('withdrawableBalance', amount)
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}
