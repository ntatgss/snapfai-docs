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
        SnapFAI supports <strong>5 major blockchain networks</strong>, each optimized for different use cases and providing unique advantages for DeFi interactions.
      </p>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">Network</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Chain ID</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Native Token</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Primary Use Case</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Ethereum</strong></td>
              <td className="border border-gray-300 px-4 py-3">1</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">DeFi Hub & Blue-chip assets</td>
              <td className="border border-gray-300 px-4 py-3">✅ Live</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Arbitrum One</strong></td>
              <td className="border border-gray-300 px-4 py-3">42161</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">Low-cost L2 scaling</td>
              <td className="border border-gray-300 px-4 py-3">✅ Live</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Base</strong></td>
              <td className="border border-gray-300 px-4 py-3">8453</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">Coinbase L2 ecosystem</td>
              <td className="border border-gray-300 px-4 py-3">✅ Live</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Avalanche</strong></td>
              <td className="border border-gray-300 px-4 py-3">43114</td>
              <td className="border border-gray-300 px-4 py-3">AVAX</td>
              <td className="border border-gray-300 px-4 py-3">High-performance DeFi</td>
              <td className="border border-gray-300 px-4 py-3">✅ Live</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3"><strong>Optimism</strong></td>
              <td className="border border-gray-300 px-4 py-3">10</td>
              <td className="border border-gray-300 px-4 py-3">ETH</td>
              <td className="border border-gray-300 px-4 py-3">Optimistic L2 scaling</td>
              <td className="border border-gray-300 px-4 py-3">✅ Live</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Network Details</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-blue-800">Ethereum</h3>
            <p className="mb-2"><strong>The Original DeFi Hub</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Largest DeFi ecosystem</li>
              <li>• Most established protocols</li>
              <li>• Blue-chip assets</li>
              <li>• Highest security</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-purple-800">Arbitrum One</h3>
            <p className="mb-2"><strong>Ethereum L2 Scaling</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Low transaction fees</li>
              <li>• Fast confirmations</li>
              <li>• Ethereum security</li>
              <li>• Growing ecosystem</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-indigo-800">Base</h3>
            <p className="mb-2"><strong>Coinbase's L2 Solution</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Coinbase integration</li>
              <li>• Developer-friendly</li>
              <li>• Low fees</li>
              <li>• Rapid adoption</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-red-800">Avalanche</h3>
            <p className="mb-2"><strong>High-Performance DeFi</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Subsecond finality</li>
              <li>• High throughput</li>
              <li>• Subnet technology</li>
              <li>• Institutional focus</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-orange-800">Optimism</h3>
            <p className="mb-2"><strong>Optimistic Rollup L2</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Optimistic rollup tech</li>
              <li>• Ethereum compatibility</li>
              <li>• Low transaction costs</li>
              <li>• Strong developer tools</li>
            </ul>
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