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
          <h2 className="mb-4 text-3xl font-bold">🤖 AI-Powered DeFi Assistant</h2>
          <p className="mb-4 text-lg">Experience DeFi like never before with our intelligent conversational interface.</p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">💬</span>
                <div>
                  <strong>Natural Language Interface</strong>: Interact with DeFi protocols using conversational commands like "Swap 100 USDC to ETH on Arbitrum"
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🧠</span>
                <div>
                  <strong>Advanced AI Processing</strong>: Powered by advanced natural language processing and real-time market data
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🎯</span>
                <div>
                  <strong>Smart Recommendations</strong>: Provides optimal strategies for swaps, lending, and yield farming through AI analysis
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">⚡</span>
                <div>
                  <strong>Function Calling</strong>: Direct DeFi operations via conversational commands with automatic parameter extraction
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">🔍</span>
                <div>
                  <strong>Live Search Integration</strong>: Real-time web search capabilities for market data, news, and price information
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">📊</span>
                <div>
                  <strong>Price Queries</strong>: Natural language price queries with real-time market data
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">💼 Multi-Chain Portfolio Management</h2>
          <p className="mb-4 text-lg">Track your actual DeFi assets across all supported networks with live balance updates.</p>
          <div className="bg-green-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-green-600">📈</span>
                <div>
                  <strong>Real Portfolio Dashboard</strong>: Tracks actual DeFi assets across all supported networks with live balance updates
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">🔗</span>
                <div>
                  <strong>Advanced Token Integration</strong>: Powered by professional token APIs for accurate balance data and token discovery
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">🌐</span>
                <div>
                  <strong>Multi-Chain Support</strong>: Monitors holdings on Ethereum, Arbitrum, Base, Avalanche, and Optimism
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">⚡</span>
                <div>
                  <strong>Real-time Balances</strong>: Live token balances fetched directly from blockchain with automatic ERC-20 token discovery
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">💰</span>
                <div>
                  <strong>Native Token Support</strong>: Proper handling of ETH, AVAX with accurate pricing and display
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">📊</span>
                <div>
                  <strong>Enhanced Pricing</strong>: Real-time prices using multiple data sources for comprehensive coverage
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">📈</span>
                <div>
                  <strong>Portfolio Analytics</strong>: Performance tracking, gains/losses calculation, and asset distribution analysis
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">🔄 Smart Swaps & Trading</h2>
          <p className="mb-4 text-lg">Professional-grade swap aggregation with optimal pricing and advanced trading features.</p>
          <div className="bg-purple-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🔗</span>
                <div>
                  <strong>Professional Swap Aggregation</strong>: Advanced swap aggregation with permit2 support for optimal rates
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🌐</span>
                <div>
                  <strong>Multi-DEX Aggregation</strong>: Access to liquidity across multiple decentralized exchanges for best pricing
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🔄</span>
                <div>
                  <strong>Cross-Chain Swaps</strong>: Seamless token swaps across different networks with chain-specific optimization
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🛡️</span>
                <div>
                  <strong>Slippage Protection</strong>: Automatic slippage management and transaction optimization for optimal trade execution
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">⚡</span>
                <div>
                  <strong>Real-time Quotes</strong>: Live pricing and swap quotes with 500ms debounced updates for accurate market data
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">⛽</span>
                <div>
                  <strong>Gas Optimization</strong>: Smart gas estimation and transaction cost optimization across all supported networks
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">🔐 Advanced Wallet & Authentication</h2>
          <p className="mb-4 text-lg">Secure multi-wallet support with enterprise-grade authentication and session management.</p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🔗</span>
                <div>
                  <strong>Multi-Wallet Support</strong>: Compatible with MetaMask, WalletConnect, Coinbase Wallet, and other major wallets
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🔐</span>
                <div>
                  <strong>Secure Authentication</strong>: Sign-In with Ethereum for secure, gasless authentication across all chains
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🔄</span>
                <div>
                  <strong>Chain-Agnostic Sessions</strong>: Network switching without re-authentication for seamless user experience
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">📋</span>
                <div>
                  <strong>Session Management</strong>: Persistent sessions with secure server-side validation and protected route access
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-600">🛡️</span>
                <div>
                  <strong>Protected Routes</strong>: Secure access control for portfolio and trading features with authentication validation
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">🌐 Cross-Chain Infrastructure</h2>
          <p className="mb-4 text-lg">Comprehensive support for major blockchain networks with unified user experience.</p>
          <div className="bg-red-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🌐</span>
                <div>
                  <strong>5 Networks Supported</strong>: Comprehensive support for Ethereum, Arbitrum, Base, Avalanche, and Optimism
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">💼</span>
                <div>
                  <strong>Multi-Network Wallet</strong>: Single wallet interface for all supported chains with unified user experience
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🔄</span>
                <div>
                  <strong>Network Switching</strong>: Seamless network switching with proper chain configurations and validation
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🔧</span>
                <div>
                  <strong>Custom Network Support</strong>: Easily extendable architecture for new EVM chains with minimal configuration
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">📊 Analytics & Tracking</h2>
          <p className="mb-4 text-lg">Comprehensive analytics and performance monitoring for business intelligence and optimization.</p>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600">👥</span>
                <div>
                  <strong>User Analytics</strong>: Comprehensive tracking of wallet connections, session data, and user behavior patterns
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600">📈</span>
                <div>
                  <strong>Swap Analytics</strong>: Detailed transaction tracking including volume, success rates, and gas costs
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600">📊</span>
                <div>
                  <strong>Portfolio Tracking</strong>: Historical portfolio snapshots and performance analytics over time
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600">⚡</span>
                <div>
                  <strong>Real-time Metrics</strong>: Live dashboard with total users, swaps, volume, and chain distribution statistics
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600">📋</span>
                <div>
                  <strong>Performance Monitoring</strong>: Daily metrics aggregation for business intelligence and platform optimization
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">📈 Platform Stats & Transparency</h2>
          <p className="mb-4 text-lg">Real-time platform metrics and performance indicators for complete transparency.</p>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-yellow-600">📊</span>
                <div>
                  <strong>Live Platform Metrics</strong>: Real-time statistics showing total users, swaps, volume, and active networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-yellow-600">🔍</span>
                <div>
                  <strong>Public Transparency</strong>: Open access to platform performance data and user engagement metrics
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-yellow-600">🌐</span>
                <div>
                  <strong>Network Distribution</strong>: Usage breakdown across all supported blockchain networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-yellow-600">📈</span>
                <div>
                  <strong>Growth Analytics</strong>: Track platform adoption, user retention, and trading volume trends
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-yellow-600">⚡</span>
                <div>
                  <strong>Performance Indicators</strong>: Real-time metrics showcasing platform efficiency and responsiveness
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">🏆 Trading Leaderboard & Competition</h2>
          <p className="mb-4 text-lg">Compete with top traders and earn points for every trade you make on the platform.</p>
          <div className="bg-red-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-red-600">💰</span>
                <div>
                  <strong>Points System</strong>: Earn 1 point for every 1 USD traded, with points awarded immediately after successful trades
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🏅</span>
                <div>
                  <strong>Multiple Timeframes</strong>: Compete across daily, weekly, monthly, and all-time leaderboards
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">📈</span>
                <div>
                  <strong>Real-Time Rankings</strong>: Live leaderboard updates as trades are executed across all supported networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🎯</span>
                <div>
                  <strong>Fair Competition</strong>: All traders compete equally based on trading volume in USD value
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-600">🏆</span>
                <div>
                  <strong>Top Trader Recognition</strong>: Showcase your trading skills and compete with the best in the community
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