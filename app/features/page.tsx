import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Core Features | SnapFAI",
  description: "Explore SnapFAI's powerful DeFi features and capabilities",
}

export default function Features() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">⭐ Core Features</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-3xl font-bold">1. AI-Powered Chat Interface</h2>
          <p className="mb-4 text-lg">Experience DeFi like never before with our intelligent conversational interface.</p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🤖</span>
                <div>
                  <strong>Natural Language Processing</strong>: Communicate with DeFi protocols using everyday language - no technical jargon required
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🎯</span>
                <div>
                  <strong>Intelligent Swap Detection</strong>: Automatically understands swap requests from conversational text and suggests optimal routes
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🧠</span>
                <div>
                  <strong>Context Awareness</strong>: Maintains conversation history and user preferences for personalized interactions
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">💼</span>
                <div>
                  <strong>Wallet Integration</strong>: Personalizes responses based on your connected wallet and current balance across networks
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">2. Live Search & Market Intelligence</h2>
          <p className="mb-4 text-lg">Stay ahead of the market with real-time data aggregation and analysis.</p>
          <div className="bg-green-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-green-600">📊</span>
                <div>
                  <strong>Real-Time Data</strong>: Access live cryptocurrency prices, breaking news, and market sentiment analysis
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">🔄</span>
                <div>
                  <strong>Multi-Source Aggregation</strong>: Combines data from web searches, news feeds, and social media for comprehensive insights
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">⚙️</span>
                <div>
                  <strong>Customizable Sources</strong>: Choose your preferred data sources including Web, News, X/Twitter, and specialized crypto feeds
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">⚡</span>
                <div>
                  <strong>Instant Price Discovery</strong>: Get current prices for any supported cryptocurrency across multiple networks
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">3. Multi-Chain Token Swapping</h2>
          <p className="mb-4 text-lg">Execute trades across multiple blockchain networks with optimal pricing and routing.</p>
          <div className="bg-purple-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🌐</span>
                <div>
                  <strong>Cross-Chain Compatibility</strong>: Trade tokens seamlessly across 6 major blockchain networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">💰</span>
                <div>
                  <strong>Best Price Aggregation</strong>: Automatically finds the best rates across multiple DEX protocols and liquidity sources
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🛣️</span>
                <div>
                  <strong>Smart Routing</strong>: Optimized trade execution through 0x Protocol integration with advanced routing algorithms
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🛡️</span>
                <div>
                  <strong>Slippage Protection</strong>: Configurable slippage tolerance to protect your trades from unfavorable price movements
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">4. Advanced Wallet Management</h2>
          <p className="mb-4 text-lg">Comprehensive wallet integration and portfolio management across all supported networks.</p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🔗</span>
                <div>
                  <strong>Universal Wallet Support</strong>: Compatible with MetaMask, WalletConnect, Coinbase Wallet, and other major wallets
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">📈</span>
                <div>
                  <strong>Real-Time Balance Tracking</strong>: Monitor your complete portfolio across all supported networks in one interface
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🔄</span>
                <div>
                  <strong>Automatic Network Switching</strong>: Seamlessly switch between blockchain networks when needed for optimal rates
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">📋</span>
                <div>
                  <strong>Transaction Monitoring</strong>: Track transaction status with real-time updates and detailed execution logs
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">5. Professional Trading Interface</h2>
          <p className="mb-4 text-lg">Advanced trading capabilities designed for both beginners and professional traders.</p>
          <div className="bg-red-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🎛️</span>
                <div>
                  <strong>Dual Interface Options</strong>: Choose between conversational chat or traditional trading UI based on your preference
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">📊</span>
                <div>
                  <strong>Advanced Order Types</strong>: Market orders with customizable slippage protection and advanced execution parameters
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">⛽</span>
                <div>
                  <strong>Gas Optimization</strong>: Smart gas estimation and fee optimization to minimize transaction costs
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">📜</span>
                <div>
                  <strong>Transaction History</strong>: Complete audit trail of all your trading activity with detailed analytics
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-primary">
          Discover the future of DeFi interaction with SnapFAI today! 🚀
        </p>
      </div>
    </main>
  )
} 