'use client'
import React from 'react'
import { useOpenConnectModal } from '@0xsequence/kit'

type SequenceConnectButtonProps = {
  
}

const SequenceConnectButton = ({
  
}: SequenceConnectButtonProps) => {
  const { setOpenConnectModal } = useOpenConnectModal()

  return (
    <button
      onClick={() => {
        setOpenConnectModal(true)
        
      }}
      className="uppercase p-4 border border-solid border-separate flex gap-3 items-center justify-center"
    >
      <span>
        Connect Sequence Wallet
      </span>
    </button>
  )
}

export default SequenceConnectButton
