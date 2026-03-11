import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
