import { useCallback } from 'react'

import usePanda from './usePanda'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { leave, getBambooStakingContract } from '../panda/utils'

const useLeave = () => {
  const { account } = useWallet()
  const panda = usePanda()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getBambooStakingContract(panda),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account],
  )

  return { onLeave: handle }
}

export default useLeave
