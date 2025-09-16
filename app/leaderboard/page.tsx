import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leaderboard | SnapFAI",
  description: "Top traders leaderboard and points system for SnapFAI platform",
}

export default function Leaderboard() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">🏆 Leaderboard</h1>
      
      <p className="mb-8 text-lg">
        Compete with the best traders on SnapFAI! Earn points for every trade you make and climb the leaderboard rankings.
      </p>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">How Points Work</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-800">Trading Points System</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 font-semibold">💰 Point Calculation</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>1 USD traded = 1 point</strong></li>
                <li>• Points are calculated based on the total USD value of your trades</li>
                <li>• All supported tokens and networks count toward your score</li>
                <li>• Points are awarded immediately after successful trades</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">🎯 Examples</h4>
              <ul className="space-y-2 text-sm">
                <li>• Trade $500 worth of tokens = 500 points</li>
                <li>• Trade $1,000 worth of tokens = 1,000 points</li>
                <li>• Multiple trades accumulate your total score</li>
                <li>• Higher volume trades = higher points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Leaderboard Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="mb-2 text-lg font-semibold text-green-800">Daily</h3>
            <p className="text-sm text-gray-600">Top traders for the current day</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="mb-2 text-lg font-semibold text-blue-800">Weekly</h3>
            <p className="text-sm text-gray-600">Top traders for the current week</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🗓️</div>
            <h3 className="mb-2 text-lg font-semibold text-purple-800">Monthly</h3>
            <p className="text-sm text-gray-600">Top traders for the current month</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="mb-2 text-lg font-semibold text-orange-800">All Time</h3>
            <p className="text-sm text-gray-600">Top traders since leaderboard inception</p>
          </div>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Leaderboard Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-blue-800">📈 Real-Time Rankings</h3>
            <p className="text-sm text-gray-600">
              Rankings update instantly as trades are executed, providing live competition and motivation.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-green-800">🎯 Fair Competition</h3>
            <p className="text-sm text-gray-600">
              All traders compete on equal footing with points based purely on trading volume in USD.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="mb-3 text-xl font-semibold text-purple-800">🏅 Achievement System</h3>
            <p className="text-sm text-gray-600">
              Track your progress across different time periods and celebrate your trading milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <h2 className="mb-4 text-2xl font-bold text-yellow-800">🚀 Join the Competition</h2>
        <p className="mb-4 text-gray-700">
          Start trading on SnapFAI to earn points and climb the leaderboard. Every trade counts toward your ranking!
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://snapfai.com/leaderboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Leaderboard
          </a>
          <a 
            href="/features" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Learn Trading Features
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Trade more, earn more points, and climb to the top! 🏆
        </p>
      </div>
    </main>
  )
}
