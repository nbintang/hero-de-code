import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AosLayout from "@/components/AosLayout";
import WhatsApp from "@/components/svg/Whatsapp";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosLayout>
          <div className="flex flex-col relative min-h-[100dvh] overflow-x-hidden">
            <div className="flex flex-col flex-1  ">
              {children}
              <div className="w-14 h-14 lg:w-20 lg:h-20 fixed bottom-7 right-6">
                <WhatsApp />
              </div>
            </div>
          </div>
        </AosLayout>
      </body>
    </html>
  );
}
