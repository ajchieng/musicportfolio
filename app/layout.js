import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "alex chieng | producer",
  description: "Minimalist music production portfolio for Alexander Chieng."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[var(--bg)] text-[var(--text)] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(139,119,86,0.2),transparent_24%),linear-gradient(180deg,#f7f3ec_0%,#f3efe7_100%)]" />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <SiteHeader />

          <main className="panel-frame mt-8 flex-1 px-0 py-2 sm:mt-10 sm:py-4">
            <div className="pointer-events-none absolute right-[-3rem] bottom-[-2rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(120,109,88,0.15),transparent_70%)]" />
            <div className="relative">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
