import type { Metadata, Viewport } from "next";
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
  authors: [
    { name: "Mariella Wirth" },
    {
      name: "Raphael Wirth",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className + " h-full bg-gray-50 antialiased"}>
        {children}
      </body>
    </html>
  );
}
