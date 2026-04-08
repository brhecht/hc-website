import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Humble Conviction",
  description: "Pitch Better, Get Funded Faster. Investor-tested insights for startup founders.",
  metadataBase: new URL("https://humbleconviction.com"),
  openGraph: {
    title: "Humble Conviction",
    description: "Pitch Better, Get Funded Faster. Investor-tested insights for startup founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
