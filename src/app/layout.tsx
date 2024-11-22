/* eslint-disable @next/next/no-page-custom-font */
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";

export const metadata: Metadata = {
  title: "Het driekluik",
  description:
    "Het drieluik - heldere, overzichtelijke documentatie voor verslavingszorg",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} bg-opacity-70 bg-gradient-to-b from-[#ffffff] to-background`}
    >
      <body>
        <LayoutWithNav>{children}</LayoutWithNav>
      </body>
    </html>
  );
}
