import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | SnapFAI",
  description: "Frequently asked questions about SnapFAI",
}

export default function FAQ() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">❓ Frequently Asked Questions</h1>
      
      <p className="mb-8 text-lg">
        Find answers to the most common questions about SnapFAI. If you can't find what you're looking for, 
        feel free to reach out to our support team.
      </p>
      
      <div className="space-y-8">
        <section>
          <h2 className="mb-6 text-3xl font-bold text-blue-600">General Questions</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Is SnapFAI free to use?</h3>
              <p><strong>A:</strong> Yes, SnapFAI is completely free to use. You only pay standard blockchain gas fees for transactions, which go directly to the network validators and miners. We don't charge any additional fees or subscriptions.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Do you store my private keys?</h3>
              <p><strong>A:</strong> No, SnapFAI is completely non-custodial. We never have access to your private keys or funds. All transactions are signed directly by your wallet, and you maintain full control of your assets at all times.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Which wallets are supported?</h3>
              <p><strong>A:</strong> SnapFAI supports all major Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and embedded social wallets. Any wallet that supports the networks we operate on will work with SnapFAI.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: What makes SnapFAI different from other DeFi platforms?</h3>
              <p><strong>A:</strong> SnapFAI is the first AI-powered DeFi platform that allows you to interact with blockchain protocols using natural language. Instead of navigating complex interfaces, you simply chat with our AI to execute trades, check prices, and get market insights.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-green-600">Trading Questions</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: How do you find the best prices?</h3>
              <p><strong>A:</strong> SnapFAI aggregates prices from multiple DEX protocols through 0x Protocol integration to find optimal rates. We automatically scan across different liquidity sources and present you with the best available price for your trade.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: What is slippage protection?</h3>
              <p><strong>A:</strong> Slippage protection ensures your trade executes within acceptable price ranges. We default to 1% slippage tolerance, but you can customize this. If the price moves unfavorably beyond your tolerance, the transaction will fail to protect you from unexpected losses.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Can I cancel a transaction?</h3>
              <p><strong>A:</strong> Once a transaction is submitted to the blockchain, it cannot be cancelled. However, you can set appropriate gas fees for faster processing, and our interface will warn you before confirming any transaction.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: What's the minimum trade amount?</h3>
              <p><strong>A:</strong> There's no minimum trade amount imposed by SnapFAI, but you should consider gas fees and ensure the trade amount makes economic sense. Very small trades might not be cost-effective due to blockchain transaction fees.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-purple-600">Technical Questions</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: How accurate are the price quotes?</h3>
              <p><strong>A:</strong> Price quotes are real-time and accurate at the moment of request. However, prices can change rapidly due to market volatility. We refresh quotes regularly and warn you if prices have moved significantly before transaction confirmation.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: What happens if a transaction fails?</h3>
              <p><strong>A:</strong> If a transaction fails, SnapFAI analyzes the failure reason and provides clear explanations with actionable guidance. Common reasons include insufficient gas, price slippage, or network congestion. You'll still pay gas fees for failed transactions as this goes to network validators.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Is my data private?</h3>
              <p><strong>A:</strong> Yes, we prioritize user privacy and only process data necessary for service functionality. We don't store personal information unnecessarily and never share user data with third parties. All communication is encrypted and secure.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Which blockchain networks do you support?</h3>
              <p><strong>A:</strong> SnapFAI currently supports 6 major networks: Ethereum, Arbitrum One, Base, Polygon, Avalanche, and Sepolia (testnet). We continuously evaluate new networks based on user demand, security, and ecosystem maturity.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-orange-600">Security & Safety</h2>
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: How secure is SnapFAI?</h3>
              <p><strong>A:</strong> SnapFAI employs enterprise-grade security measures. We use non-custodial architecture, encrypted communications, verified smart contracts, and regular security audits. Your funds always remain under your control in your own wallet.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: What should I do if I suspect a security issue?</h3>
              <p><strong>A:</strong> If you encounter any security concerns, immediately contact our support team at security@snapfai.com. We take all security reports seriously and respond promptly to investigate and address any issues.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Are smart contracts audited?</h3>
              <p><strong>A:</strong> We work with audited protocols and aggregators like 0x Protocol. While we don't deploy our own trading smart contracts, we carefully vet all protocols we integrate with and only work with established, audited platforms.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-bold text-red-600">Troubleshooting</h2>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: My wallet won't connect. What should I do?</h3>
              <p><strong>A:</strong> Try refreshing the page, clearing your browser cache, or switching to a different browser. Ensure your wallet is unlocked and on the correct network. If issues persist, check if your wallet needs updating or contact support.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: Why is my transaction taking so long?</h3>
              <p><strong>A:</strong> Transaction speed depends on network congestion and gas fees paid. Higher gas fees result in faster processing. During busy periods, transactions may take longer. You can check transaction status on blockchain explorers using the transaction hash.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold">Q: SnapFAI isn't understanding my requests. What can I do?</h3>
              <p><strong>A:</strong> Try being more specific with amounts, token names, and networks. Use our common prompt examples as a guide. If the AI still doesn't understand, you can contact support or try rephrasing your request in simpler terms.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
        <p className="mb-4">Can't find the answer you're looking for? Our support team is here to help!</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:support@snapfai.com" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Email Support
          </a>
          <a href="https://discord.gg/snapfai" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
            Join Discord
          </a>
          <a href="https://twitter.com/snapfai" className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-500">
            Follow on Twitter
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          We're here to help make your DeFi journey smooth and successful! 🤝
        </p>
      </div>
    </main>
  )
} 