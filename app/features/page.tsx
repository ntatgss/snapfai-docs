import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | SnapFAI",
  description: "Explore SnapFAI's powerful DeFi features and capabilities",
}

export default function Features() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-4xl font-bold">Features</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Cross-Chain & Chain Interactions</h2>
        <p className="mb-4">Effortlessly connect and transact across multiple blockchains with SnapFAI's seamless integrations:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>LayerZero</strong>: Bridge whitelisted tokens between supported networks, adding destination gas as needed for a smooth experience.</li>
          <li><strong>deBridge</strong>: Bridge and swap assets between Solana and supported EVM networks, all in one intuitive chat.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Borrow & Earn</h2>
        <p className="mb-4">Maximize your DeFi returns with smart borrowing and earning tools:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Aave, Compound, SparkFi</strong>: Supply collateral, borrow stablecoins, and manage loans. Query your position status, APR, or interest rates in real-time.</li>
          <li><strong>Morpho, Ethena, Pendle</strong>: Stake, unstake, claim yields, and manage assets on specialized chains. Check current APRs and reward rates with a simple prompt.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Get Accurate Price Data</h2>
        <p className="mb-4">Stay ahead with precise, real-time market data:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Pyth, ChainLink</strong>: Access reliable price feeds to trigger DeFi actions based on market conditions, like swapping when prices hit your target.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Swap</h2>
        <p className="mb-4">Get the best rates with SnapFAI's swap aggregators:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>0x, 1inch, OpenOcean, ParaSwap, Magpie, Hypersonic, OKX DEX</strong>: Execute swaps at optimal prices by automatically scanning multiple DEXs, all through a magical chat interface.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Automation & Triggers</h2>
        <p className="mb-4">Let SnapFAI handle the heavy lifting with smart automation:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Time-Based</strong>: Schedule actions, like swapping or claiming rewards, to occur after a set delay (e.g., "Swap in 15 minutes").</li>
          <li><strong>Gas-Based</strong>: Trigger transactions when gas fees are low (e.g., "Claim rewards when Gwei is below 20 on Ethereum Mainnet").</li>
          <li><strong>Price-Based</strong>: Act when asset prices meet your conditions (e.g., "Swap 500 USDT to WBTC on Arbitrum when WBTC is below $70,000").</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Multi-Source Data Aggregation</h2>
        <p className="mb-4">Stay informed with comprehensive data from across the DeFi ecosystem:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Social Channels</strong>: Monitor Twitter, Telegram, and Discord for project announcements, discussions, and sentiment shifts.</li>
          <li><strong>Documentation & Development</strong>: Track updates in Gitbook documentation and GitHub activity, including commits and pull requests.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Real-Time Insights</h2>
        <p className="mb-4">Make smarter decisions with SnapFAI's actionable insights:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Price Tracking & Sentiment Analysis</strong>: Correlate price movements with community sentiment to spot trends.</li>
          <li><strong>Awareness & Community Growth</strong>: Monitor follower counts, mentions, and engagement to gauge project health.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Historical Context & Trend Analysis</h2>
        <p className="mb-4">Understand the bigger picture with SnapFAI's data tools:</p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li><strong>Time-Based Queries</strong>: Compare data over days, weeks, or months to identify growth, volatility, or stagnation.</li>
          <li><strong>Keyword & Topic Filters</strong>: Focus on specific features, products, or community concerns for targeted insights.</li>
        </ul>
      </section>

      <p className="mt-12 text-xl font-semibold text-primary">
        Discover the future of DeFi interaction with SnapFAI today!
      </p>
    </main>
  )
} 