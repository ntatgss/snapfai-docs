import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SnapFAI Documentation",
  description: "Smart, Easy, and Magical DeFi Journey powered by AI Agents",
  generator: 'SnapFAI'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="antialiased">
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="ml-3 mt-3" />
            <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  )
}
