import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SnapFAI Documentation | Your Smart DeFi Journey",
  description: "Learn about SnapFAI - Revolutionary AI-powered DeFi interaction platform",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🚀 Project Introduction</h1>
      
      <p className="mb-6 text-lg">
        <strong>SnapFAI</strong> is a revolutionary AI-powered DeFi interaction platform that transforms how users engage with decentralized finance. By combining conversational artificial intelligence with comprehensive blockchain functionality, SnapFAI makes DeFi accessible to everyone through simple, natural language commands.
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">What Makes SnapFAI Unique?</h2>
        <p className="mb-4 text-lg">SnapFAI bridges the gap between traditional finance users and the complex DeFi ecosystem by offering:</p>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li><strong>Conversational DeFi</strong>: Interact with blockchain protocols using everyday language</li>
          <li><strong>AI-Powered Intelligence</strong>: Advanced AI that understands context and provides real-time market insights</li>
          <li><strong>Multi-Chain Support</strong>: Seamless operations across major blockchain networks</li>
          <li><strong>Live Market Data</strong>: Real-time price feeds and market analysis</li>
          <li><strong>Professional Security</strong>: Non-custodial design with enterprise-grade security</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Target Audience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">🔰 DeFi Beginners</h3>
              <p>Users new to decentralized finance who want an easy entry point into the ecosystem without needing to understand complex protocols.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">⚡ Experienced Traders</h3>
              <p>Power users seeking efficient, AI-enhanced trading tools that can execute complex strategies through simple conversations.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-semibold">📊 Crypto Enthusiasts</h3>
              <p>Users who want to stay updated with real-time market data and insights while having easy access to trading tools.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">🏢 Institutional Users</h3>
              <p>Organizations requiring reliable, scalable DeFi solutions with enterprise-grade security and compliance features.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">The Vision</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg leading-relaxed">
            SnapFAI envisions a future where interacting with decentralized finance is as simple as having a conversation. 
            We believe that the complexity of DeFi shouldn't be a barrier to financial innovation and inclusion. 
            Through our AI-powered platform, we're democratizing access to sophisticated financial tools, 
            making them available to anyone who can speak naturally about their financial goals.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Explore the Documentation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/getting-started" className="block p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:bg-blue-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">🚀 Getting Started</h3>
            <p className="text-sm text-gray-600">Learn how to connect your wallet and start using SnapFAI</p>
          </Link>
          
          <Link href="/features" className="block p-6 bg-green-50 rounded-lg border-l-4 border-green-400 hover:bg-green-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-green-800">⭐ Core Features</h3>
            <p className="text-sm text-gray-600">Discover SnapFAI's powerful AI-driven DeFi capabilities</p>
          </Link>
          
          <Link href="/prompts" className="block p-6 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:bg-purple-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-purple-800">💬 Common Prompts</h3>
            <p className="text-sm text-gray-600">See examples of how to interact with SnapFAI</p>
          </Link>
          
          <Link href="/networks" className="block p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400 hover:bg-orange-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-orange-800">🌐 Networks</h3>
            <p className="text-sm text-gray-600">Explore supported blockchain networks and their features</p>
          </Link>
          
          <Link href="/tokens" className="block p-6 bg-red-50 rounded-lg border-l-4 border-red-400 hover:bg-red-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-red-800">💎 Tokens</h3>
            <p className="text-sm text-gray-600">View complete token listings across all networks</p>
          </Link>
          
          <Link href="/support" className="block p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-400 hover:bg-indigo-100 transition-colors">
            <h3 className="mb-2 text-lg font-semibold text-indigo-800">📞 Support</h3>
            <p className="text-sm text-gray-600">Get help and connect with the community</p>
          </Link>
        </div>
      </section>

      <div className="text-center">
        <p className="text-xl font-semibold italic text-primary">
          SnapFAI - Making DeFi as easy as having a conversation 🚀
        </p>
      </div>
    </main>
  )
}
