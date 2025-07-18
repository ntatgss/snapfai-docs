import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Benefits | SnapFAI",
  description: "Discover the benefits of using SnapFAI for your DeFi journey",
}

export default function Benefits() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🎯 Benefits of Using SnapFAI</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-blue-800">For Beginners</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 text-2xl">📚</span>
              <div>
                <h3 className="font-semibold">Educational</h3>
                <p className="text-sm text-gray-600">Learn DeFi through interactive conversations and guided experiences</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🛡️</span>
              <div>
                <h3 className="font-semibold">Safe</h3>
                <p className="text-sm text-gray-600">Non-custodial design keeps your assets secure - you always control your keys</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold">Intuitive</h3>
                <p className="text-sm text-gray-600">No need to learn complex DeFi interfaces - just speak naturally</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">📱</span>
              <div>
                <h3 className="font-semibold">Accessible</h3>
                <p className="text-sm text-gray-600">Works on any device with a web browser - no special software needed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-green-800">For Experienced Users</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold">Efficient</h3>
                <p className="text-sm text-gray-600">Execute complex trades faster through natural language commands</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">📊</span>
              <div>
                <h3 className="font-semibold">Comprehensive</h3>
                <p className="text-sm text-gray-600">Access real-time market data and analysis from multiple sources</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🔄</span>
              <div>
                <h3 className="font-semibold">Multi-Chain</h3>
                <p className="text-sm text-gray-600">Manage assets across multiple blockchains from one unified interface</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🎛️</span>
              <div>
                <h3 className="font-semibold">Advanced</h3>
                <p className="text-sm text-gray-600">Professional-grade features with simplified access and automation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-purple-800">For All Users</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 text-2xl">💰</span>
              <div>
                <h3 className="font-semibold">Cost-Effective</h3>
                <p className="text-sm text-gray-600">Find the best rates across multiple DEX protocols automatically</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold">Secure</h3>
                <p className="text-sm text-gray-600">Enterprise-grade security with user-controlled keys and private transactions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🌐</span>
              <div>
                <h3 className="font-semibold">Global</h3>
                <p className="text-sm text-gray-600">24/7 access from anywhere in the world with internet connectivity</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-2xl">🆓</span>
              <div>
                <h3 className="font-semibold">Open</h3>
                <p className="text-sm text-gray-600">No subscription fees or hidden costs - only pay blockchain gas fees</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Why Choose SnapFAI?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🚀 Innovation</h3>
            <p>SnapFAI represents the cutting edge of DeFi interaction technology, combining AI, blockchain, and user experience design to create something truly revolutionary.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🤝 Community</h3>
            <p>Join a growing community of DeFi users who are pioneering the future of finance through conversational interfaces and AI-powered trading.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">📈 Growth</h3>
            <p>Whether you're learning DeFi basics or executing complex strategies, SnapFAI grows with you, adapting to your evolving needs and expertise.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold">🎯 Results</h3>
            <p>Focus on your financial goals while SnapFAI handles the technical complexity, optimization, and execution of your DeFi strategies.</p>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Experience the benefits yourself - start using SnapFAI today! 🌟
        </p>
      </div>
    </main>
  )
} 