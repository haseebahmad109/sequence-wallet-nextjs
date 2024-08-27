import Image from "next/image";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";
import { useAccount } from "wagmi";
import SequenceDisconnectButton from "@/SequenceDisconnectButton";

const Providers = dynamic(() => import("@/Providers"), {
  ssr: false,
});

const SequenceConnectButton = dynamic(() => import("@/SequenceConnectButton"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { address, isConnected } = useAccount();
  return (
    <main
      className={`flex flex-col items-center justify-between my-12 ${inter.className}`}
    >
      {isConnected && <span>You are connected: {address}</span>}
      {isConnected ? <SequenceDisconnectButton /> : <SequenceConnectButton />}
    </main>
  );
}

export default function HomePage() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
