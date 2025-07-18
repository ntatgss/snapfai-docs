import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Common Prompts | SnapFAI",
  description: "Examples of how to interact with SnapFAI using natural language",
}

export default function Prompts() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">💬 Common Prompt Examples</h1>
      
      <p className="mb-8 text-lg">
        SnapFAI understands natural language, making it easy to interact with DeFi protocols. 
        Here are some examples of how you can communicate with SnapFAI to get things done.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-blue-600">Basic Token Swaps</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <code className="text-sm">"Swap 100 USDT to ETH"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <code className="text-sm">"Trade 0.5 ETH for USDC"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <code className="text-sm">"Convert 1000 USDC to DAI"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <code className="text-sm">"Exchange 50 USDT to WBTC"</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-purple-600">Cross-Chain Swaps</h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                <code className="text-sm">"Swap 100 USDT to ETH on Arbitrum"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                <code className="text-sm">"Trade 500 USDC for MATIC on Polygon"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                <code className="text-sm">"Convert 0.1 ETH to USDC on Base"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                <code className="text-sm">"Exchange 1000 DAI to AVAX on Avalanche"</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-green-600">Price Queries</h2>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <code className="text-sm">"What's the current price of ETH?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <code className="text-sm">"How much is Bitcoin worth?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <code className="text-sm">"Show me the price of USDC"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <code className="text-sm">"What's the current rate for MATIC?"</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-orange-600">Market Information</h2>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                <code className="text-sm">"Give me the latest crypto news"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                <code className="text-sm">"What's happening with Ethereum today?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                <code className="text-sm">"Show me market sentiment for Bitcoin"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                <code className="text-sm">"What are the trending cryptocurrencies?"</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-red-600">Wallet Information</h2>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <code className="text-sm">"Show my wallet balance"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <code className="text-sm">"What network am I connected to?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <code className="text-sm">"Check my portfolio"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <code className="text-sm">"Display my transaction history"</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-indigo-600">Advanced Queries</h2>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                <code className="text-sm">"Find the best rate to swap 1000 USDT to ETH"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                <code className="text-sm">"Compare prices across different networks"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                <code className="text-sm">"What's the gas cost for swapping on Ethereum?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                <code className="text-sm">"Show me arbitrage opportunities"</code>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Educational Queries</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="mb-4 text-lg">SnapFAI can also help you learn about DeFi concepts and protocols:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"How does DeFi work?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"Explain liquidity pools"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"What is slippage in trading?"</code>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"How do I choose the right network?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"What are gas fees?"</code>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-gray-400">
                <code className="text-sm">"Explain yield farming"</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">Tips for Better Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">🎯 Be Specific</h3>
            <p className="text-sm mb-2">Include specific amounts, tokens, and networks for better results.</p>
            <div className="bg-white p-2 rounded text-xs">
              <strong>Good:</strong> "Swap 100 USDT to ETH on Arbitrum"<br/>
              <strong>Less specific:</strong> "Swap some USDT"
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">💡 Use Natural Language</h3>
            <p className="text-sm mb-2">Speak naturally - SnapFAI understands conversational language.</p>
            <div className="bg-white p-2 rounded text-xs">
              <strong>Natural:</strong> "I want to trade my ETH for some USDC"<br/>
              <strong>Also works:</strong> "ETH → USDC swap"
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">🔄 Context Matters</h3>
            <p className="text-sm mb-2">SnapFAI remembers your conversation context.</p>
            <div className="bg-white p-2 rounded text-xs">
              <strong>Follow-up:</strong> "What about on Polygon?"<br/>
              <strong>After:</strong> "Swap 100 USDT to ETH"
            </div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="mb-3 text-lg font-semibold">❓ Ask for Help</h3>
            <p className="text-sm mb-2">Don't hesitate to ask for explanations or guidance.</p>
            <div className="bg-white p-2 rounded text-xs">
              <strong>Examples:</strong> "Help me understand gas fees"<br/>
              "What's the difference between networks?"
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Start chatting with SnapFAI using any of these examples! 💬
        </p>
      </div>
    </main>
  )
} 