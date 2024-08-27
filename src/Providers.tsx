"use client";
import { KitProvider } from "@0xsequence/kit";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { WagmiProvider } from "wagmi";
import { config, kitConfig, queryClient } from "./config";

const Providers = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>{children}</KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
