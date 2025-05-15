import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SnapFAI | Your Smart DeFi Journey",
  description: "SnapFAI - Doing DeFi Like a Snap!",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to SnapFAI</h1>
      <p className="mb-4 text-xl">
        Your Smart, Easy, and Magical DeFi Journey powered by AI Agents
      </p>
      <p className="mb-8">
        SnapFAI.com is a revolutionary interaction layer that transforms how you engage with decentralized finance (DeFi). 
        Powered by conversational AI and real-time data aggregation, SnapFAI delivers a smart, intuitive, and magical user 
        experience for managing DeFi tasks like swapping tokens, lending assets, staking, or exploring yield farming. Our 
        chat-based interface simplifies complex operations, optimizes transaction routes, and provides near real-time insights 
        from multiple DeFi platforms and protocols.
      </p>
      <p className="mb-8">
        With SnapFAI, you can effortlessly navigate the DeFi ecosystem through natural language prompts, execute actions across 
        protocols, and stay informed with curated project updates and trends. Whether you're a beginner or a seasoned user, 
        SnapFAI makes DeFi feel like magic—intelligent, seamless, and just a snap away.
      </p>
      <p className="mb-12 text-xl font-semibold text-primary">
        Doing DeFi Like a Snap!
      </p>
      
      <div className="mt-12 text-center">
        <Link 
          href="/features" 
          className="inline-block rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Explore Our Features →
        </Link>
      </div>
    </main>
  )
}
