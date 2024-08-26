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
    >
      <span className="uppercase flex gap-3 items-center justify-center">
        Connect Sequence Wallet
      </span>
    </button>
  )
}

export default SequenceConnectButton
