import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AosLayout from "@/components/AosLayout";
import FloatingActionButton from "@/components/FloatingActionsButton";
import { Toaster } from "react-hot-toast";
import DrawerDialog from "@/components/DrawerDialog";
import { ActionFloatButtonProvider } from "@/context/useActionFloatButtonContext";
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
  title: "HeartCare",
  description: "Empowering Minds, Healing Hearts Consultations",
  openGraph: {
    title: "HeartCare",
    description: "Empowering Minds, Healing Hearts Consultations",
    url: "https://hero-de-code.vercel.app",
    siteName: 'HeartCare',
    images: [
      {
        url: "https://hero-de-code.vercel.app/og?title=HeartCare", // Dynamic og route
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
            <ActionFloatButtonProvider>
              <div className="flex flex-col flex-1  ">
                {children}
                <FloatingActionButton />
                <DrawerDialog />
              </div>
            </ActionFloatButtonProvider>
            <Toaster />
          </div>
        </AosLayout>
      </body>
    </html>
  );
}
