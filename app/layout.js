import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#36d1dc",
};

export const metadata = {
  metadataBase: new URL("https://agamjeet.in"),
  title: "Agamjeet Singh | Web, SaaS, AI, Automation, Voice",
  description: "Websites, SaaS products, AI and SaaS consultation, automation, and voice AI. Agamjeet Singh builds the product and the systems around it.",
  keywords: "Agamjeet Singh, Agamjeet Singh Padda, web development, SaaS, AI consultation, automation, voice AI, WhatsApp automation, IndicCore",
  authors: [{ name: "Agamjeet Singh Padda" }],
  creator: "Agamjeet Singh Padda",
  publisher: "Agamjeet Singh Padda",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Agamjeet Singh | Web, SaaS, AI, Automation, Voice",
    description: "Websites, SaaS products, AI and SaaS consultation, automation, and voice AI.",
    url: "https://agamjeet.in",
    siteName: "Agamjeet Singh",
    images: [
      {
        url: "/me-4.jpeg",
        width: 1563,
        height: 1600,
        alt: "Agamjeet Singh Padda",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamjeet Singh | Web, SaaS, AI, Automation, Voice",
    description: "Websites, SaaS products, AI and SaaS consultation, automation, and voice AI.",
    images: ["/me-4.jpeg"],
    creator: "@Agam_io",
  },
  icons: {
    icon: '/favi.png',
    apple: '/favi.png',
  },
  manifest: "/manifest.json",
  verification: {
    google: "googlef65beec6f0cd052f",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favi.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Agamjeet Singh Padda",
              "alternateName": ["Agam", "Agamjeet", "Agamjeet Singh"],
              "url": "https://agamjeet.in",
              "jobTitle": "Web, SaaS, and AI builder",
              "description": "Builds websites, SaaS products, AI and SaaS consultation, automation, and voice AI",
              "knowsAbout": ["Web development", "SaaS", "AI consultation", "Automation", "Voice AI", "Artificial Intelligence"],
              "sameAs": [
                "https://x.com/Agam_io",
                "https://www.linkedin.com/in/agamjeet-padda/",
                "https://github.com/Agamjeet"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
