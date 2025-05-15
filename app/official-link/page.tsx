import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Official Links | SnapFAI",
  description: "Official links and social channels for SnapFAI",
}

export default function OfficialLink() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-8 text-4xl font-bold">Official Links</h1>

      <div className="space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Website</h2>
          <Link 
            href="http://snapfai.com" 
            target="_blank"
            className="text-primary hover:underline"
          >
            snapfai.com
          </Link>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Telegram</h2>
          <div className="space-y-3">
            <div>
              <h3 className="mb-2 font-medium">Channel</h3>
              <Link 
                href="https://t.me/SnapFAI_Channel" 
                target="_blank"
                className="text-primary hover:underline"
              >
                @SnapFAI_Channel
              </Link>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Community Group</h3>
              <Link 
                href="https://t.me/SnapFAI" 
                target="_blank"
                className="text-primary hover:underline"
              >
                @SnapFAI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 