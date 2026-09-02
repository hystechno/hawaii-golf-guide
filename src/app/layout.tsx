import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hawaii Golf Guide | Every Golf Course in Hawaii",
  description: "The complete directory of golf courses across Oahu, Maui, Kauai, Big Island, Lanai, and Molokai. Find tee times, course info, and plan your Hawaii golf vacation.",
  keywords: "Hawaii golf, Oahu golf courses, Maui golf, Kauai golf, Big Island golf, Hawaii golf vacations",
  verification: {
    google: "sRM-MODxwuNQl9ybnGzUU5Vaux4QzlxNz2XCsYGD-Bg",
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
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${cormorant.variable} antialiased bg-gray-50`}
      >
        {/* Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">⛳</span>
                <span className="font-bold text-xl text-emerald-700">Hawaii Golf Guide</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                <Link href="/courses" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  All Courses
                </Link>
                <Link href="/island/oahu" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Oahu
                </Link>
                <Link href="/island/maui" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Maui
                </Link>
                <Link href="/island/big-island" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Big Island
                </Link>
                <Link href="/island/kauai" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Kauai
                </Link>
                <Link href="/island/molokai-lanai" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Molokai & Lanai
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Blog
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Link href="/courses/" className="hidden md:block text-gray-600 hover:text-emerald-600 transition-colors">
                  Search
                </Link>
                <Link href="/contact/" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  List Your Course
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Google Analytics 4 (IP anonymization enabled) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T7356Q29NF"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T7356Q29NF', { anonymize_ip: true });
          `}
        </Script>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Hawaii Golf Guide</h3>
              <p className="text-sm">
                The complete directory of golf courses across the Hawaiian Islands. 
                Plan your perfect Hawaii golf vacation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Islands</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/island/oahu" className="hover:text-white transition-colors">Oahu</Link></li>
                <li><Link href="/island/maui" className="hover:text-white transition-colors">Maui</Link></li>
                <li><Link href="/island/big-island" className="hover:text-white transition-colors">Big Island</Link></li>
                <li><Link href="/island/kauai" className="hover:text-white transition-colors">Kauai</Link></li>
                <li><Link href="/island/lanai" className="hover:text-white transition-colors">Lanai</Link></li>
                <li><Link href="/island/molokai" className="hover:text-white transition-colors">Molokai</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/" className="hover:text-white transition-colors">Golf Blog</Link></li>
                <li><Link href="/trip-planner/" className="hover:text-white transition-colors">Trip Planner</Link></li>
                <li><Link href="/courses/" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Business</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact/" className="hover:text-white transition-colors">List Your Course</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition-colors">Advertise</Link></li>
                <li><Link href="/about/" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-sm text-center">
            © 2026 Hawaii Golf Guide. All rights reserved. | hawaiigolf.guide
          </div>
        </footer>
      </body>
    </html>
  );
}
