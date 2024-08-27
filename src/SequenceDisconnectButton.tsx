"use client";
import React from "react";
import { useDisconnect } from "wagmi";

type SequenceDisconnectButtonProps = {};

const SequenceDisconnectButton = ({}: SequenceDisconnectButtonProps) => {
  const { disconnect } = useDisconnect();

  return (
    <>
      <button onClick={() => disconnect()}>
        <span>disconnect</span>
      </button>
    </>
  );
};

export default SequenceDisconnectButton;
