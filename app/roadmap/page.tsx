import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roadmap | SnapFAI",
  description: "SnapFAI development roadmap and feature status tracking",
}

export default function Roadmap() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🗺️ SnapFAI Roadmap</h1>
      
      <p className="mb-8 text-lg">
        Track SnapFAI's development progress and see which features are live, in development, or planned for the future.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Feature Status Legend</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <h3 className="font-semibold text-green-800">Live</h3>
            </div>
            <p className="text-sm text-green-700">Feature is available and working on SnapFAI</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🚧</span>
              <h3 className="font-semibold text-blue-800">In Development</h3>
            </div>
            <p className="text-sm text-blue-700">Feature is being actively developed</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">📋</span>
              <h3 className="font-semibold text-yellow-800">Planned</h3>
            </div>
            <p className="text-sm text-yellow-700">Feature is planned for future release</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🔮</span>
              <h3 className="font-semibold text-purple-800">Research</h3>
            </div>
            <p className="text-sm text-purple-700">Feature is under research and evaluation</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Core Platform Features</h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">AI-Powered DeFi Assistant</h3>
                  <p className="text-green-700 mb-3">Advanced AI assistant powered by professional AI APIs for intelligent DeFi interactions and trading insights.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Natural language DeFi queries and commands</li>
                    <li>• Intelligent trading recommendations</li>
                    <li>• Real-time market analysis and insights</li>
                    <li>• Smart contract interaction guidance</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Multi-Chain Portfolio Management</h3>
                  <p className="text-green-700 mb-3">Comprehensive portfolio tracking across 25+ blockchain networks with real-time balance updates.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 25+ network support (Ethereum, Arbitrum, Base, Avalanche, Optimism, Solana, Polygon, BSC, and more)</li>
                    <li>• Real-time token balance tracking</li>
                    <li>• Automatic ERC-20 token discovery</li>
                    <li>• Professional token API integration</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Smart Swaps & Trading</h3>
                  <p className="text-green-700 mb-3">Intelligent token swapping with optimized routing and gas fee management.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Advanced routing algorithms for best prices</li>
                    <li>• Multi-DEX aggregation</li>
                    <li>• Gas optimization across networks</li>
                    <li>• Slippage protection and MEV resistance</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Advanced Wallet & Authentication</h3>
                  <p className="text-green-700 mb-3">Secure wallet integration with modern authentication methods.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Multiple wallet provider support</li>
                    <li>• Secure authentication protocols</li>
                    <li>• Session management and security</li>
                    <li>• Cross-device compatibility</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Cross-Chain Infrastructure</h3>
                  <p className="text-green-700 mb-3">Seamless cross-chain operations with unified user experience.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 25+ networks supported</li>
                    <li>• Unified wallet interface</li>
                    <li>• Smart network switching</li>
                    <li>• Optimized RPC endpoints</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Analytics & Tracking</h3>
                  <p className="text-green-700 mb-3">Comprehensive analytics and performance monitoring for business intelligence.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• User analytics and behavior tracking</li>
                    <li>• Swap analytics and volume metrics</li>
                    <li>• Portfolio performance tracking</li>
                    <li>• Real-time platform metrics</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Community Features</h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Platform Stats & Transparency</h3>
                  <p className="text-green-700 mb-3">Real-time platform metrics and performance indicators for complete transparency.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Live platform metrics dashboard</li>
                    <li>• Public transparency reporting</li>
                    <li>• Network distribution analytics</li>
                    <li>• Growth and performance tracking</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Trading Leaderboard & Competition</h3>
                  <p className="text-green-700 mb-3">Compete with top traders and earn points for every trade on the platform.</p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Points system (1 USD = 1 point)</li>
                    <li>• Multiple timeframe competitions</li>
                    <li>• Real-time ranking updates</li>
                    <li>• Fair competition based on trading volume</li>
                  </ul>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Advanced Features</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🚧</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Advanced DeFi Strategies</h3>
                  <p className="text-blue-700 mb-3">Automated DeFi yield farming and advanced trading strategies.</p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Automated yield farming strategies</li>
                    <li>• Advanced trading algorithms</li>
                    <li>• Risk management tools</li>
                    <li>• Portfolio optimization suggestions</li>
                  </ul>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">In Development</span>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🚧</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Mobile App</h3>
                  <p className="text-blue-700 mb-3">Native mobile application for iOS and Android.</p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• iOS and Android native apps</li>
                    <li>• Push notifications for trades</li>
                    <li>• Offline portfolio viewing</li>
                    <li>• Biometric authentication</li>
                  </ul>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">In Development</span>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🚧</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Advanced Analytics Dashboard</h3>
                  <p className="text-blue-700 mb-3">Enhanced analytics with customizable dashboards and advanced reporting.</p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Customizable dashboard widgets</li>
                    <li>• Advanced charting and visualization</li>
                    <li>• Export capabilities for reports</li>
                    <li>• Historical data analysis</li>
                  </ul>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">In Development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Future Features</h2>
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📋</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">NFT Marketplace Integration</h3>
                  <p className="text-yellow-700 mb-3">Buy, sell, and trade NFTs directly within SnapFAI.</p>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Cross-chain NFT trading</li>
                    <li>• NFT portfolio management</li>
                    <li>• Marketplace aggregation</li>
                    <li>• AI-powered NFT recommendations</li>
                  </ul>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Planned</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📋</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">Social Trading Features</h3>
                  <p className="text-yellow-700 mb-3">Follow top traders and copy successful strategies.</p>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Copy trading functionality</li>
                    <li>• Social feeds and discussions</li>
                    <li>• Trader performance tracking</li>
                    <li>• Community-driven insights</li>
                  </ul>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Planned</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📋</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">Institutional Features</h3>
                  <p className="text-yellow-700 mb-3">Advanced features for institutional and professional traders.</p>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• White-label solutions</li>
                    <li>• API access for institutions</li>
                    <li>• Advanced risk management</li>
                    <li>• Compliance and reporting tools</li>
                  </ul>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Planned</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📋</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">Cross-Chain Bridge</h3>
                  <p className="text-yellow-700 mb-3">Native cross-chain asset bridging within the platform.</p>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Direct asset bridging</li>
                    <li>• Optimized routing for transfers</li>
                    <li>• Bridge aggregation</li>
                    <li>• Real-time bridge status tracking</li>
                  </ul>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Planned</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Research & Innovation</h2>
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🔮</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">AI-Powered Portfolio Optimization</h3>
                  <p className="text-purple-700 mb-3">Advanced AI algorithms for automatic portfolio rebalancing and optimization.</p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Machine learning portfolio optimization</li>
                    <li>• Automated rebalancing strategies</li>
                    <li>• Risk-adjusted returns optimization</li>
                    <li>• Market condition adaptation</li>
                  </ul>
                </div>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🔮</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Decentralized Governance</h3>
                  <p className="text-purple-700 mb-3">Community-driven governance system for platform development decisions.</p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Token-based voting system</li>
                    <li>• Community proposal mechanisms</li>
                    <li>• Decentralized decision making</li>
                    <li>• Transparent governance processes</li>
                  </ul>
                </div>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🔮</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Quantum-Resistant Security</h3>
                  <p className="text-purple-700 mb-3">Future-proof security measures against quantum computing threats.</p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Post-quantum cryptography</li>
                    <li>• Quantum-resistant key generation</li>
                    <li>• Advanced encryption protocols</li>
                    <li>• Future security standards</li>
                  </ul>
                </div>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
        <h2 className="mb-4 text-2xl font-bold text-blue-800">🚀 Stay Updated</h2>
        <p className="mb-4 text-blue-700">
          Follow SnapFAI's development progress and get notified about new features and updates.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/snapfai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            GitHub Repository
          </a>
          <a 
            href="/support" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Building the future of DeFi, one feature at a time! 🚀
        </p>
      </div>
    </main>
  )
}
