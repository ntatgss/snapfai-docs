import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Getting Started | SnapFAI",
  description: "Learn how to get started with SnapFAI and begin your DeFi journey",
}

export default function GettingStarted() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🚀 Getting Started</h1>
      
      <p className="mb-8 text-lg">
        Welcome to SnapFAI! Follow these simple steps to start your AI-powered DeFi journey. 
        No complex setup required - just connect your wallet and start chatting.
      </p>

      <div className="space-y-8">
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h2 className="mb-4 text-2xl font-bold text-blue-800">Step 1: Connect Your Wallet</h2>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">1.</span>
              <div>
                <p>Visit <Link href="https://snapfai.com" className="text-blue-600 hover:underline font-semibold">SnapFAI Platform</Link></p>
                <p className="text-sm text-gray-600">Open your web browser and navigate to the SnapFAI application</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">2.</span>
              <div>
                <p>Click "Connect Wallet" in the top-right corner</p>
                <p className="text-sm text-gray-600">Look for the wallet connection button in the header</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">3.</span>
              <div>
                <p>Choose your preferred wallet (MetaMask, WalletConnect, Coinbase Wallet, etc.)</p>
                <p className="text-sm text-gray-600">SnapFAI supports all major Web3 wallets</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600 font-bold">4.</span>
              <div>
                <p>Approve the connection request in your wallet</p>
                <p className="text-sm text-gray-600">Your wallet will ask for permission to connect to SnapFAI</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
          <h2 className="mb-4 text-2xl font-bold text-green-800">Step 2: Start Chatting</h2>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">1.</span>
              <div>
                <p>Navigate to the chat interface</p>
                <p className="text-sm text-gray-600">The main chat window will be prominently displayed</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">2.</span>
              <div>
                <p>Type your request in natural language</p>
                <p className="text-sm text-gray-600">Try something like "What's the price of ETH?" or "Swap 100 USDT to ETH"</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">3.</span>
              <div>
                <p>SnapFAI will understand and process your request</p>
                <p className="text-sm text-gray-600">Our AI will analyze your message and provide relevant information or actions</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">4.</span>
              <div>
                <p>Follow the prompts to complete your transaction</p>
                <p className="text-sm text-gray-600">For trades, you'll see quotes and can confirm transactions</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h2 className="mb-4 text-2xl font-bold text-purple-800">Step 3: Explore Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 font-semibold">🌐 Try Different Networks</h3>
              <p className="text-sm text-gray-600 mb-3">Experiment with various blockchain networks to find the best rates and lowest fees</p>
              <div className="bg-white p-2 rounded text-xs">
                <code>"Swap 100 USDT to ETH on Arbitrum"</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">💰 Check Prices</h3>
              <p className="text-sm text-gray-600 mb-3">Ask for real-time price information on any supported cryptocurrency</p>
              <div className="bg-white p-2 rounded text-xs">
                <code>"What's the current price of Bitcoin?"</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">📰 Read Market News</h3>
              <p className="text-sm text-gray-600 mb-3">Stay updated with the latest crypto developments and market analysis</p>
              <div className="bg-white p-2 rounded text-xs">
                <code>"Show me the latest crypto news"</code>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">💡 Practice with Small Amounts</h3>
              <p className="text-sm text-gray-600 mb-3">Start with small transactions to get familiar with the platform</p>
              <div className="bg-white p-2 rounded text-xs">
                <code>"Swap 10 USDT to ETH"</code>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Technical Requirements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">🌐 Browser Compatibility</h3>
            <ul className="text-sm space-y-1">
              <li>• Chrome 88+ (Recommended)</li>
              <li>• Firefox 85+</li>
              <li>• Safari 14+</li>
              <li>• Edge 88+</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">👛 Wallet Requirements</h3>
            <ul className="text-sm space-y-1">
              <li>• Web3-compatible wallet</li>
              <li>• Sufficient native tokens for gas</li>
              <li>• Network connection</li>
              <li>• Updated wallet software</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">🔗 Network Requirements</h3>
            <ul className="text-sm space-y-1">
              <li>• Stable internet connection</li>
              <li>• Access to blockchain RPCs</li>
              <li>• WebSocket support</li>
              <li>• No VPN restrictions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">First Steps Checklist</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-3 font-semibold">✅ Before You Start</h3>
              <ul className="space-y-2 text-sm">
                <li>□ Install a Web3 wallet (e.g., MetaMask)</li>
                <li>□ Fund your wallet with some crypto</li>
                <li>□ Ensure you have gas tokens (ETH, MATIC, AVAX, etc.)</li>
                <li>□ Understand basic DeFi concepts</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">🎯 Your First Actions</h3>
              <ul className="space-y-2 text-sm">
                <li>□ Connect your wallet to SnapFAI</li>
                <li>□ Check your balance: "Show my wallet balance"</li>
                <li>□ Get a price quote: "What's the price of ETH?"</li>
                <li>□ Try a small swap: "Swap 10 USDT to ETH"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Need Help?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">📚 Learn More</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-blue-600 hover:underline">Explore Core Features</Link></li>
              <li><Link href="/prompts" className="text-blue-600 hover:underline">See Common Prompts</Link></li>
              <li><Link href="/faq" className="text-blue-600 hover:underline">Check FAQ</Link></li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">🤝 Get Support</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-green-600 hover:underline">Contact Support</Link></li>
              <li><Link href="https://discord.gg/snapfai" className="text-green-600 hover:underline">Join Discord</Link></li>
              <li><Link href="https://twitter.com/snapfai" className="text-green-600 hover:underline">Follow on Twitter</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Ready to start? Connect your wallet and begin your SnapFAI journey! 🚀
        </p>
      </div>
    </main>
  )
}
