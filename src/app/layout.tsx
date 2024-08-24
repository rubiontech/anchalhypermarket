import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { constructMetaData } from "@/lib/utils";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react";

const googleFont = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = constructMetaData();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={googleFont.className}>
        <Providers>
          <Navbar />

          <main>{children}</main>
          <Analytics />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
