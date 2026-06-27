import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faqih Abdul Rachman | Backend Developer",
  description: "Backend Developer spesialis Java Spring Boot, Mulesoft, dan sistem keuangan digital. Berpengalaman di fintech, e-commerce, dan healthcare.",
  keywords: ["backend developer", "java spring boot", "mulesoft", "fintech developer indonesia"],
  openGraph: {
    title: "Faqih Abdul Rachman — Backend Developer",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-bg-primary text-text-primary selection:bg-accent selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
