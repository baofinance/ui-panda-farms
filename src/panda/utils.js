import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { supportedPools } from './lib/constants'

BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
	STAKING: {
		DEFAULT: 200000,
		SNX: 850000,
	},
}

export const getMasterChefAddress = (pnda) => {
	return pnda && pnda.masterChefAddress
}

export const getWbnbPriceAddress = (pnda) => {
	return pnda && pnda.wbnbPriceAddress
}

export const getPandaPriceAddress = (pnda) => {
	return pnda && pnda.pndaPriceAddress
}

export const getPandaAddress = (pnda) => {
	return pnda && pnda.pndaAddress
}
export const getWbnbContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.wbnb
}

export const getWbnbPriceContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.wbnbPrice
}

export const getPandaPriceContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.pndaPrice
}

export const getMasterChefContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.masterChef
}
export const getPandaContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.panda
}

export const getBambooStakingContract = (pnda) => {
	return pnda && pnda.contracts && pnda.contracts.BambooStaking
}

export const getFarms = (pnda) => {
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

export const getPoolWeight = async (masterChefContract, pid) => {
	const [{ allocPoint }, totalAllocPoint] = await Promise.all([
		masterChefContract.methods.poolInfo(pid).call(),
		masterChefContract.methods.totalAllocPoint().call(),
	])

	return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
	return masterChefContract.methods.pendingReward(pid, account).call()
}

export const getLockedEarned = async (pndaContract, account) => {
	return pndaContract.methods.lockOf(account).call()
}

export const getTotalLPWbnbValue = async (
	masterChefContract,
	wbnbContract,
	lpContract,
	tokenContract,
	tokenDecimals,
	pid,
) => {
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

export const approve = async (lpContract, masterChefContract, account) => {
	return lpContract.methods
		.approve(masterChefContract.options.address, ethers.constants.MaxUint256)
		.send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account, ref) => {
	return masterChefContract.methods
		.deposit(pid, ethers.utils.parseUnits(amount, 18), ref)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const unstake = async (
	masterChefContract,
	pid,
	amount,
	account,
	ref,
) => {
	return masterChefContract.methods
		.withdraw(pid, ethers.utils.parseUnits(amount, 18), ref)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}
export const harvest = async (masterChefContract, pid, account) => {
	return masterChefContract.methods
		.claimReward(pid)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const getStaked = async (masterChefContract, pid, account) => {
	try {
		const { amount } = await masterChefContract.methods
			.userInfo(pid, account)
			.call()
		return new BigNumber(amount)
	} catch {
		return new BigNumber(0)
	}
}

export const getWbnbPrice = async (pnda) => {
	const wbnbPriceContract = getWbnbPriceContract(pnda)
	const amount = await wbnbPriceContract.methods.latestAnswer().call()
	return new BigNumber(amount)
}

export const getPandaPrice = async (pnda) => {
	const addr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
	const amount = await pnda.contracts.pndaPrice.methods
		.consult(addr.toString(), 1)
		.call()
	return new BigNumber(amount)
}

export const getPandaSupply = async (pnda) => {
	return new BigNumber(await pnda.contracts.panda.methods.totalSupply().call())
}

export const getBambooSupply = async (pnda) => {
	const bambooStakingContract = getBambooStakingContract(pnda)
	return bambooStakingContract
		? new BigNumber(await bambooStakingContract.methods.totalSupply().call())
		: null
}

export const getReferrals = async (masterChefContract, account) => {
	return await masterChefContract.methods.getGlobalRefAmount(account).call()
}

export function getRefUrl() {
	var refer = '0x0000000000000000000000000000000000000000'
	const urlParams = new URLSearchParams(window.location.search)
	if (urlParams.has('ref')) {
		refer = urlParams.get('ref')
	}
	console.log(refer)

	return refer
}

export const redeem = async (masterChefContract, account) => {
	let now = new Date().getTime() / 1000
	if (now >= 1597172400) {
		return masterChefContract.methods
			.exit()
			.send({ from: account })
			.on('transactionHash', (tx) => {
				console.log(tx)
				return tx.transactionHash
			})
	} else {
		alert('pool not active')
	}
}

export const enter = async (contract, amount, account) => {
	return contract.methods
		.enter(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const leave = async (contract, amount, account) => {
	return contract.methods
		.leave(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}
