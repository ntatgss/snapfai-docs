import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Supported Networks | SnapFAI",
  description: "Explore the blockchain networks supported by SnapFAI",
}

export default function Networks() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🌐 Supported Blockchain Networks</h1>
      
      <p className="mb-8 text-lg">
        SnapFAI supports <strong>25+ major blockchain networks</strong>, each optimized for different use cases and providing unique advantages for DeFi interactions.
      </p>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">Network</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Chain ID</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Native Token</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Portfolio Support</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Swap Support</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Ethereum</strong></td>
              <td className="border border-gray-300 px-4 py-3">1</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Arbitrum</strong></td>
              <td className="border border-gray-300 px-4 py-3">42161</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Base</strong></td>
              <td className="border border-gray-300 px-4 py-3">8453</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Avalanche</strong></td>
              <td className="border border-gray-300 px-4 py-3">43114</td>
              <td className="border border-gray-300 px-4 py-3">AVAX</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Optimism</strong></td>
              <td className="border border-gray-300 px-4 py-3">10</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Solana</strong></td>
              <td className="border border-gray-300 px-4 py-3">101</td>
              <td className="border border-gray-300 px-4 py-3">SOL</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Polygon</strong></td>
              <td className="border border-gray-300 px-4 py-3">137</td>
              <td className="border border-gray-300 px-4 py-3">MATIC</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Binance Smart Chain</strong></td>
              <td className="border border-gray-300 px-4 py-3">56</td>
              <td className="border border-gray-300 px-4 py-3">BNB</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>zkSync Era</strong></td>
              <td className="border border-gray-300 px-4 py-3">324</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Blast</strong></td>
              <td className="border border-gray-300 px-4 py-3">81457</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Scroll</strong></td>
              <td className="border border-gray-300 px-4 py-3">534352</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Linea</strong></td>
              <td className="border border-gray-300 px-4 py-3">59144</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Polygon zkEVM</strong></td>
              <td className="border border-gray-300 px-4 py-3">1101</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Gnosis</strong></td>
              <td className="border border-gray-300 px-4 py-3">100</td>
              <td className="border border-gray-300 px-4 py-3">GNO</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Fantom</strong></td>
              <td className="border border-gray-300 px-4 py-3">250</td>
              <td className="border border-gray-300 px-4 py-3">FTM</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Mode</strong></td>
              <td className="border border-gray-300 px-4 py-3">34443</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Metis</strong></td>
              <td className="border border-gray-300 px-4 py-3">1088</td>
              <td className="border border-gray-300 px-4 py-3">METIS</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Mantle</strong></td>
              <td className="border border-gray-300 px-4 py-3">5000</td>
              <td className="border border-gray-300 px-4 py-3">MNT</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Taiko</strong></td>
              <td className="border border-gray-300 px-4 py-3">167000</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Cronos</strong></td>
              <td className="border border-gray-300 px-4 py-3">25</td>
              <td className="border border-gray-300 px-4 py-3">CRO</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Celo</strong></td>
              <td className="border border-gray-300 px-4 py-3">42220</td>
              <td className="border border-gray-300 px-4 py-3">CELO</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Aurora</strong></td>
              <td className="border border-gray-300 px-4 py-3">1313161554</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Moonbeam</strong></td>
              <td className="border border-gray-300 px-4 py-3">1284</td>
              <td className="border border-gray-300 px-4 py-3">GLMR</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Moonriver</strong></td>
              <td className="border border-gray-300 px-4 py-3">1285</td>
              <td className="border border-gray-300 px-4 py-3">MOVR</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Boba</strong></td>
              <td className="border border-gray-300 px-4 py-3">288</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>opBNB</strong></td>
              <td className="border border-gray-300 px-4 py-3">204</td>
              <td className="border border-gray-300 px-4 py-3">BNB</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Full Support</td>
              <td className="border border-gray-300 px-4 py-3">✅ Active</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Token Coverage</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-800">Comprehensive Token Support</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 font-semibold">📊 Token Database</h4>
              <ul className="space-y-1 text-sm">
                <li>• <strong>15,000+ Supported Tokens</strong> across all networks</li>
                <li>• <strong>Chain-Specific Addresses</strong> for proper token mapping</li>
                <li>• <strong>Native Token Support</strong> for ETH, AVAX with accurate pricing</li>
                <li>• <strong>Stablecoin Coverage</strong> including USDC, USDT, DAI, FRAX</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">🔍 Automatic Discovery</h4>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Professional Token APIs</strong> automatically discover all ERC-20 tokens</li>
                <li>• <strong>Popular DeFi Tokens</strong> like AAVE, UNI, LINK, WBTC</li>
                <li>• <strong>Protocol-Specific Tokens</strong> for each network</li>
                <li>• <strong>Real-time Balance Updates</strong> with live pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Popular Tokens by Network</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-blue-800">Ethereum</h3>
            <p className="mb-2 text-sm text-gray-600">The Original DeFi Hub</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, DAI, FRAX</p>
              <p><strong>DeFi:</strong> WETH, AAVE, UNI, LINK, ARB, MKR, LDO, CRV</p>
              <p><strong>Other:</strong> WBTC</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-purple-800">Arbitrum</h3>
            <p className="mb-2 text-sm text-gray-600">Ethereum L2 Scaling</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, DAI</p>
              <p><strong>DeFi:</strong> WETH, ARB, LINK, RDNT, MAGIC, GMX, UNI, AAVE</p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-indigo-800">Base</h3>
            <p className="mb-2 text-sm text-gray-600">Coinbase's L2 Solution</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDC, USDbC, DAI</p>
              <p><strong>DeFi:</strong> WETH, cbETH, rETH, UNI, AAVE, CRV, LDO, FRAX</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-red-800">Avalanche</h3>
            <p className="mb-2 text-sm text-gray-600">High-Performance DeFi</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> AVAX</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, DAI</p>
              <p><strong>DeFi:</strong> WETH, WBTC, JOE, QI, SUSHI, CRV, FRAX, UNI</p>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-orange-800">Optimism</h3>
            <p className="mb-2 text-sm text-gray-600">Optimistic Rollup L2</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, DAI</p>
              <p><strong>DeFi:</strong> WETH, WBTC, OP, VELO, SNX, AAVE, CRV, FRAX, UNI, LDO</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-purple-800">Solana</h3>
            <p className="mb-2 text-sm text-gray-600">High-Performance Blockchain</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> SOL</p>
              <p><strong>Stablecoins:</strong> USDC, USDT</p>
              <p><strong>DeFi:</strong> RAY, SRM, ORCA, MNGO, BONK, WIF</p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-indigo-800">Polygon</h3>
            <p className="mb-2 text-sm text-gray-600">Ethereum Scaling Solution</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> MATIC</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, DAI</p>
              <p><strong>DeFi:</strong> WETH, QUICK, SUSHI, CRV, FRAX, UNI</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-yellow-800">Binance Smart Chain</h3>
            <p className="mb-2 text-sm text-gray-600">Binance Ecosystem Chain</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> BNB</p>
              <p><strong>Stablecoins:</strong> USDC, USDT, BUSD</p>
              <p><strong>DeFi:</strong> CAKE, XVS, BUSD, WBNB</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">zkSync Era</h3>
            <p className="mb-2 text-sm text-gray-600">Zero-Knowledge L2</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDC, USDT</p>
              <p><strong>DeFi:</strong> WETH, DAI, LUSD, FRAX</p>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-cyan-800">Blast</h3>
            <p className="mb-2 text-sm text-gray-600">Native Yield L2</p>
            <div className="text-sm space-y-1">
              <p><strong>Native:</strong> ETH</p>
              <p><strong>Stablecoins:</strong> USDB, DAI</p>
              <p><strong>DeFi:</strong> WETH, BLAST, ORBIT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Network Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🔍 Automatic Detection</h3>
            <p>SnapFAI automatically detects your current network and suggests optimal networks for specific trades based on fees, liquidity, and token availability.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🔄 Smart Switching</h3>
            <p>When you request a trade, SnapFAI will prompt you to switch networks if better rates or lower fees are available on a different chain.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🚀 Custom RPCs</h3>
            <p>We use optimized RPC endpoints for better performance, reduced latency, and improved reliability across all supported networks.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">⛽ Gas Optimization</h3>
            <p>Network-specific gas optimization strategies ensure you always pay optimal fees for fast, reliable transaction execution.</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="text-xl font-semibold italic text-primary">
          Trade seamlessly across all supported networks with SnapFAI! 🌐
        </p>
      </div>
    </main>
  )
} 