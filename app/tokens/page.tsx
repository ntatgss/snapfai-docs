import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Supported Tokens | SnapFAI",
  description: "Complete list of tokens supported by SnapFAI across all networks",
}

export default function Tokens() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">💎 Supported Tokens by Network</h1>
      
      <p className="mb-8 text-lg">
        SnapFAI supports a comprehensive selection of tokens across all major blockchain networks. 
        Below you'll find detailed information about supported tokens, including contract addresses and decimals for each network.
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-blue-600">Ethereum Mainnet (Chain ID: 1)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Token</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Symbol</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Contract Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Decimals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Ethereum</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">ETH</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">USD Coin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tether</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDT</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xdAC17F958D2ee523a2206206994597C13D831ec7</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Dai Stablecoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">DAI</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x6B175474E89094C44Da98b954EedeAC495271d0F</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Wrapped Bitcoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">WBTC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599</td>
                  <td className="border border-gray-300 px-4 py-3">8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-purple-600">Arbitrum One (Chain ID: 42161)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-purple-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Token</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Symbol</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Contract Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Decimals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Ethereum</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">ETH</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">USD Coin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xaf88d065e77c8cC2239327C5EDb3A432268e5831</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tether</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDT</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Dai Stablecoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">DAI</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Wrapped Bitcoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">WBTC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f</td>
                  <td className="border border-gray-300 px-4 py-3">8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-indigo-600">Base (Chain ID: 8453)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Token</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Symbol</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Contract Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Decimals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Ethereum</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">ETH</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">USD Coin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tether</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDT</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Dai Stablecoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">DAI</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-red-600">Avalanche (Chain ID: 43114)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Token</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Symbol</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Contract Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Decimals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Avalanche</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">AVAX</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Wrapped Ethereum</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">WETH</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">USD Coin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tether</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDT</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-orange-600">Optimism (Chain ID: 10)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-orange-50">
                  <th className="border border-gray-300 px-4 py-3 text-left">Token</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Symbol</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Contract Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Decimals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Ethereum</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">ETH</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">USD Coin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tether</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">USDT</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x94b008aA00579c1307B0EF2c499aD98a8ce58e58</td>
                  <td className="border border-gray-300 px-4 py-3">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Dai Stablecoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">DAI</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1</td>
                  <td className="border border-gray-300 px-4 py-3">18</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Wrapped Bitcoin</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono">WBTC</td>
                  <td className="border border-gray-300 px-4 py-3 text-xs font-mono">0x68f180fcCe6836688e9084f035309E29Bf0A2095</td>
                  <td className="border border-gray-300 px-4 py-3">8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Important Notes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="mb-2 text-lg font-semibold">⚠️ Contract Addresses</h3>
            <p className="text-sm">Always verify contract addresses before interacting with tokens. SnapFAI uses verified contract addresses, but it's good practice to double-check.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 className="mb-2 text-lg font-semibold">🔄 Token Updates</h3>
            <p className="text-sm">Our token list is regularly updated. New tokens are added based on liquidity, community demand, and security audits.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="mb-2 text-lg font-semibold">🔒 Security</h3>
            <p className="text-sm">All supported tokens undergo security verification. However, always do your own research before trading any cryptocurrency.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 className="mb-2 text-lg font-semibold">💡 Custom Tokens</h3>
            <p className="text-sm">Need support for a specific token? Contact our team - we're always evaluating new tokens for inclusion.</p>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Trade any supported token across all networks with SnapFAI! 💎
        </p>
      </div>
    </main>
  )
} 