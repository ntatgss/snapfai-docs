import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perpetuals (PERP) | SnapFAI",
  description: "SnapFAI's architecture, UX flow, and engineering plan for the Perpetuals feature (Orderly integration)",
}

export default function Perp() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-2 text-4xl font-bold">📘 Perpetuals (PERP)</h1>
      <p className="mb-8 text-muted-foreground">
        Introducing Perpetuals on SnapFAI.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">System Diagram</h2>
        <div className="rounded-md border bg-muted p-2 overflow-hidden">
          <img
            src="/perp-diagram.jpg"
            alt="SnapFAI PERP system diagram"
            className="w-full h-auto rounded"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Key Channels</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Wallet ↔ Frontend</strong>: EIP-1193 provider; EIP-712 signatures for Orderly auth and settlement.
          </li>
          <li>
            <strong>Frontend ↔ Orderly</strong>: REST for orders/balances/symbols/funding; WS for market + private streams.
          </li>
          <li>
            <strong>Frontend ↔ SnapFAI Server</strong>: optional thin proxy for rate limits, header normalization, risk policy, and webhooks/cron.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">UX Flow</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>First load: connect wallet, fetch symbols, tick/step, funding cadence, leverage limits.</li>
          <li>Registration (one-time): Orderly account via EIP-712 signatures; unlocks trading UI.</li>
          <li>Funding: Approve (if needed) and deposit USDC to Orderly margin account; show updated balances/leverage.</li>
          <li>
            Place order: validate tick/step/minQty, margin requirements, and risk policy; POST /order; show private WS acks.
          </li>
          <li>Monitoring: positions with uPnL/rPnL, liq price, funding; WS updates for market and private streams.</li>
          <li>
            Close & settle PnL: reduce-only close → prompt EIP-712 → POST settlement → balance updates.
          </li>
          <li>Withdraw: withdraw USDC back to wallet via protocol flow.</li>
        </ol>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Sequence Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Limit order</strong>: client validates, posts order, listens to private WS for accepted/filled, updates positions.
          </li>
          <li>
            <strong>Close + Settle</strong>: reduce-only market, then explicit PnL settlement via signed request; balances reflect rPnL.
          </li>
          <li>
            <strong>Auto-risk (optional)</strong>: monitor margin ratio; submit partial reduce-only orders to restore safety.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">UI Surface</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Header: Network, wallet, USDC balance, Settle PnL, Deposit, Withdraw</li>
          <li>Markets rail: symbols, last price, 24h change, funding</li>
          <li>Orderbook/Trades: WS orderbook + recent trades</li>
          <li>Trade Ticket: side, type, price, qty, leverage, est. margin, fees</li>
          <li>Positions: size, entry, mark, uPnL/rPnL, liq price, funding accrued</li>
          <li>Open Orders: amend/cancel, reduce-only flag</li>
          <li>Activity/History: orders, fills, settlements, deposits/withdrawals</li>
          <li>Settings: risk caps, default TP/SL, auto-settle cadence</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold">Engineering Checklist</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Resilience</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>WS auto-reconnect + REST replay</li>
              <li>Idempotent client order IDs; dedupe on resume</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Precision</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Enforce tick/step, minNotional (server too)</li>
              <li>Perp SDK math for liq price & maintenance margin</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">UX clarity</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Always show PnL state: Unrealized / Realized / Settled</li>
              <li>Inline tooltips: EIP-712, settlement, funding timing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Risk</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Global exposure caps, per-symbol leverage caps</li>
              <li>Reduce-only on closes; circuit-breakers for slippage/vol spikes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Ops</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Structured logs for orders/positions/settlements</li>
              <li>Alerting for failed settlements / WS desync / rate-limit</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Ready to wire components (providers, trade ticket, positions) and a minimal PnL-settle cron route into this codebase.
        </p>
      </section>
    </main>
  )
}


