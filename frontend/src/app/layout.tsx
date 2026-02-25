import type { Metadata } from "next"
import "@/index.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Full Stack FastAPI Project",
  icons: {
    icon: "/assets/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
