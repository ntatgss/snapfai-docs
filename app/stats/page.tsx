import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Stats | SnapFAI",
  description: "Real-time platform metrics and statistics for SnapFAI",
}

export default function Stats() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">📊 Platform Stats</h1>
      
      <p className="mb-8 text-lg">
        Monitor SnapFAI's real-time platform metrics and performance indicators. 
        Get insights into user engagement, transaction volumes, and platform growth.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Platform Performance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold text-green-800">User Engagement</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-green-600">👥</span>
                <div>
                  <strong>Active Users</strong>: Real-time count of users actively using the platform
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">📈</span>
                <div>
                  <strong>Session Duration</strong>: Average time users spend on the platform
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">🔄</span>
                <div>
                  <strong>Transaction Success Rate</strong>: Percentage of successful swaps and transactions
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600">🌐</span>
                <div>
                  <strong>Network Distribution</strong>: Usage breakdown across supported blockchain networks
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold text-purple-800">Trading Analytics</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">💰</span>
                <div>
                  <strong>Total Volume</strong>: Cumulative trading volume across all supported networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">📊</span>
                <div>
                  <strong>Daily Swaps</strong>: Number of token swaps executed in the last 24 hours
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">⚡</span>
                <div>
                  <strong>Average Gas Fees</strong>: Real-time gas cost optimization across networks
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-purple-600">🎯</span>
                <div>
                  <strong>Popular Tokens</strong>: Most traded tokens and trading pairs
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-blue-800">📈 Real-Time Updates</h3>
            <p className="text-sm text-gray-600">
              All metrics are updated in real-time, providing current insights into platform performance and user activity.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-green-800">🔍 Transparency</h3>
            <p className="text-sm text-gray-600">
              Public access to platform statistics ensures transparency and builds trust within the DeFi community.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-purple-800">📊 Analytics</h3>
            <p className="text-sm text-gray-600">
              Comprehensive analytics help users understand platform growth, network usage, and trading patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <h2 className="mb-4 text-2xl font-bold text-yellow-800">🚀 Access Platform Stats</h2>
        <p className="mb-4 text-gray-700">
          View live platform metrics and performance data directly on the SnapFAI platform.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://snapfai.com/stats" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Stats
          </a>
          <a 
            href="/features" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Learn More Features
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Monitor SnapFAI's growth and performance in real-time! 📊
        </p>
      </div>
    </main>
  )
}
