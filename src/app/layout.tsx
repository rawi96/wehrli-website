import { ShopContextProvider } from "@/contexts/shop-context";
import type { Metadata, Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#214073",
};

export const metadata: Metadata = {
  title: "Wehrli Licht GmbH",
  description: "Website von Wehrli Licht GmbH",
  manifest: "/manifest.json",
  keywords: [
    "Leuchten",
    "Lampen",
    "Lampenschirme",
    "Innenbeleuchtung",
    "Lichtplanung",
    "Lichtberatung",
    "Licht",
    "Wohnraumbeleuchtung",
    "Bürobeleuchtung",
    "Geschäftsbeleuchtung",
    "Lichtinstallation",
    "Goldach",
  ],
  authors: [{ name: "Mariella Wirth" }, { name: "Raphael Wirth" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <main className="h-full bg-gray-50 antialiased">
          <PlausibleProvider domain="wehrli-licht.ch">
            <ShopContextProvider>{children}</ShopContextProvider>
          </PlausibleProvider>
        </main>
      </body>
    </html>
  );
}
