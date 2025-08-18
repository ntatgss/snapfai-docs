import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Support & Community | SnapFAI",
  description: "Get help and connect with the SnapFAI community",
}

export default function Support() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">📞 Support & Community</h1>
      
      <p className="mb-8 text-lg">
        Need help or want to connect with other SnapFAI users? We're here to support you every step of the way. 
        Choose the option that works best for you below.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h2 className="mb-4 text-2xl font-bold text-blue-800">📧 Direct Support</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Email Support</h3>
              <p className="text-sm text-gray-600 mb-2">Get direct help from our support team</p>
              <a href="mailto:contact@snapfai.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                contact@snapfai.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Security Reports</h3>
              <p className="text-sm text-gray-600 mb-2">Report security issues or vulnerabilities</p>
              <a href="mailto:contact@snapfai.com" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                contact@snapfai.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Response Time</h3>
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours during business days. 
                Security issues are prioritized and addressed immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h2 className="mb-4 text-2xl font-bold text-purple-800">💬 Community Chat</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Discord Server</h3>
              <p className="text-sm text-gray-600 mb-2">Join our community for real-time discussions and support</p>
              <a href="https://discord.gg/7paRU3QUKr" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Join Discord
              </a>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">What you'll find:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• General discussion and help</li>
                <li>• Trading tips and strategies</li>
                <li>• Product updates and announcements</li>
                <li>• Community-driven troubleshooting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
          <h2 className="mb-4 text-2xl font-bold text-green-800">📚 Documentation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Complete Guides</h3>
              <p className="text-sm text-gray-600 mb-2">Comprehensive documentation for all SnapFAI features</p>
              <Link href="https://docs.snapfai.com" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Visit Docs
              </Link>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Quick Links:</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/getting-started" className="text-green-600 hover:underline">Getting Started Guide</Link></li>
                <li><Link href="/features" className="text-green-600 hover:underline">Core Features</Link></li>
                <li><Link href="/prompts" className="text-green-600 hover:underline">Common Prompts</Link></li>
                <li><Link href="/faq" className="text-green-600 hover:underline">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
          <h2 className="mb-4 text-2xl font-bold text-orange-800">🐛 Development</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">GitHub Repository</h3>
              <p className="text-sm text-gray-600 mb-2">Open source components and issue tracking</p>
              <a href="https://github.com/snapfai" className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                View Repository
              </a>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">For Developers:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• API documentation</li>
                <li>• Integration guides</li>
                <li>• Bug reports and feature requests</li>
                <li>• Contribution guidelines</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">🌐 Social Media & Updates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🐦</div>
            <h3 className="mb-2 font-semibold">Twitter/X</h3>
            <p className="text-sm text-gray-600 mb-3">Latest news, updates, and community highlights</p>
            <a href="https://x.com/SnapFAI" className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              @SnapFAI
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="mb-2 font-semibold">Telegram</h3>
            <p className="text-sm text-gray-600 mb-3">Community discussions and quick updates</p>
            <a href="https://t.me/SnapFAI" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Join Channel
            </a>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">📺</div>
            <h3 className="mb-2 font-semibold">YouTube</h3>
            <p className="text-sm text-gray-600 mb-3">Tutorials, demos, and feature walkthroughs</p>
            <a href="https://docs.snapfai.com" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              N/A
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">🎯 Support Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="mb-2 font-semibold">🔧 Technical Issues</h3>
              <ul className="text-sm space-y-1">
                <li>• Wallet connection problems</li>
                <li>• Transaction failures</li>
                <li>• Network switching issues</li>
                <li>• Browser compatibility</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="mb-2 font-semibold">💰 Trading Support</h3>
              <ul className="text-sm space-y-1">
                <li>• Price quote questions</li>
                <li>• Slippage and gas fees</li>
                <li>• Cross-chain swaps</li>
                <li>• Trading strategies</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="mb-2 font-semibold">📖 Educational</h3>
              <ul className="text-sm space-y-1">
                <li>• DeFi concepts and basics</li>
                <li>• How to use SnapFAI features</li>
                <li>• Best practices and tips</li>
                <li>• Market analysis guidance</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="mb-2 font-semibold">💡 Feature Requests</h3>
              <ul className="text-sm space-y-1">
                <li>• New token support</li>
                <li>• Additional networks</li>
                <li>• UI/UX improvements</li>
                <li>• Integration suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">🤝 Community Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-2 font-semibold">✅ We Encourage:</h3>
            <ul className="text-sm space-y-1">
              <li>• Helpful and respectful discussions</li>
              <li>• Sharing knowledge and experiences</li>
              <li>• Constructive feedback and suggestions</li>
              <li>• Supporting other community members</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">❌ Please Avoid:</h3>
            <ul className="text-sm space-y-1">
              <li>• Spam or promotional content</li>
              <li>• Financial advice or investment tips</li>
              <li>• Sharing private keys or sensitive data</li>
              <li>• Offensive or inappropriate behavior</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-xl font-semibold italic text-primary">
          Join our growing community and let's build the future of DeFi together! 🚀
        </p>
      </div>
    </main>
  )
} 