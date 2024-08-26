import Image from "next/image";
import { Inter } from "next/font/google";

import dynamic from 'next/dynamic'

const Providers = dynamic(
  () => import('@/Providers'),
  {
    ssr: false,
  }
)

const SequenceConnectButton = dynamic(
  () => import('@/SequenceConnectButton'),
  {
    ssr: false,
  }
)

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between my-12 ${inter.className}`}
    >
      <Providers>

        <SequenceConnectButton />

      </Providers>
    </main>
  );
}
