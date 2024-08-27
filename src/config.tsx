import { getDefaultWaasConnectors } from "@0xsequence/kit";
import { QueryClient } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  arbitrumSepolia,
  Chain,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";

export const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
  Chain,
  ...Chain[],
];

export const queryClient = new QueryClient();

// Get your own keys on sequence.build
const projectAccessKey =
  process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY ||
  "AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM";
const waasConfigKey =
  process.env.NEXT_PUBLIC_WAAS_CONFIG_KEY ||
  "eyJwcm9qZWN0SWQiOjEzNjM5LCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=";
const googleClientId =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
  "970987756660-35a6tc48hvi8cev9cnknp0iugv9poa23.apps.googleusercontent.com";
// const appleClientId = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || 'com.horizon.sequence.waas'
// const appleRedirectURI = window.location.origin + window.location.pathname //this approach doesn't work with nextjs
const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_ID ||
  "c65a6cb1aa83c4e24500130f23a437d8";

if (!projectAccessKey) {
  throw new Error("projectAccessKey is not defined");
}

if (!waasConfigKey) {
  throw new Error("waasConfigKey is not defined");
}

if (!googleClientId) {
  throw new Error("googleClientId is not defined");
}

// if (!appleClientId) {
//   throw new Error('appleClientId is not defined');
// }

// if (!appleRedirectURI) {
//   throw new Error('appleRedirectURI is not defined');
// }

if (!walletConnectProjectId) {
  throw new Error("walletConnectProjectId is not defined");
}

const connectors = getDefaultWaasConnectors({
  walletConnectProjectId,
  waasConfigKey,
  googleClientId,
  // Notice: AppleID will only work if deployed on https to support Apple redirects
  // appleClientId,
  // appleRedirectURI,
  /* Arbitrum sepolia chainId */
  defaultChainId: 421614,
  appName: "Kit Starter",
  projectAccessKey,
});

const transports: { [key: number]: any } = {};

chains.forEach((chain) => {
  transports[chain.id] = http();
});

export const config = createConfig({
  transports,
  connectors,
  chains,
});

export const kitConfig = {
  projectAccessKey,
};
