import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://buildwithagam.com"),
  title: {
    default: "buildwithagam | Agamjeet Singh Padda (Agam)",
    template: "%s | buildwithagam",
  },
  description: "buildwithagam works with clients worldwide. Agamjeet Singh Padda — Agam, Agamjeet, Agam Jeet Singh — builds websites, SaaS, AI consultation, automation, and voice AI.",
  keywords: [
    "buildwithagam",
    "Agam",
    "Agamjeet",
    "Agam Jeet Singh",
    "Agamjeet Singh",
    "Agam Jeet Singh Padda",
    "Agamjeet Singh Padda",
    "web development",
    "SaaS developer",
    "AI consultation",
    "voice AI receptionist",
    "freelance web developer",
    "remote SaaS developer",
  ],
  authors: [{ name: "Agamjeet Singh Padda", url: "https://buildwithagam.com" }],
  creator: "Agamjeet Singh Padda",
  publisher: "buildwithagam",
  alternates: {
    canonical: "/",
    languages: {
      en: "https://buildwithagam.com",
      "x-default": "https://buildwithagam.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "buildwithagam | Agamjeet Singh Padda (Agam)",
    description: "Websites, SaaS, AI consultation, automation, and voice AI for clients worldwide.",
    url: "https://buildwithagam.com",
    siteName: "buildwithagam",
    images: [
      {
        url: "/me-4.jpeg",
        width: 1563,
        height: 1600,
        alt: "Agamjeet Singh Padda",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN", "en_AU"],
  },
  twitter: {
    card: "summary_large_image",
    title: "buildwithagam | Agamjeet Singh Padda (Agam)",
    description: "Websites, SaaS, AI consultation, automation, and voice AI for clients worldwide.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://buildwithagam.com/#website",
                  "url": "https://buildwithagam.com/",
                  "name": "buildwithagam",
                  "alternateName": ["Build with Agam", "Agamjeet Singh Padda"],
                  "inLanguage": ["en"],
                  "publisher": { "@id": "https://buildwithagam.com/#person" },
                },
                {
                  "@type": "Person",
                  "@id": "https://buildwithagam.com/#person",
                  "name": "Agamjeet Singh Padda",
                  "givenName": "Agamjeet",
                  "additionalName": "Agam Jeet",
                  "familyName": "Singh Padda",
                  "alternateName": [
                    "Agam",
                    "Agamjeet",
                    "Agam Jeet Singh",
                    "Agamjeet Singh",
                    "Agam Jeet Singh Padda"
                  ],
                  "url": "https://buildwithagam.com/",
                  "image": "https://buildwithagam.com/me-4.jpeg",
                  "email": "mailto:paddaagamjeetsingh@gmail.com",
                  "jobTitle": "Web, SaaS, and AI builder",
                  "description": "Builds websites, SaaS products, AI and SaaS consultation, automation, and voice AI receptionists for clients worldwide",
                  "knowsLanguage": ["en"],
                  "workLocation": {
                    "@type": "Place",
                    "name": "Remote, worldwide"
                  },
                  "knowsAbout": ["Web development", "SaaS", "AI consultation", "Automation", "Voice AI", "Artificial Intelligence"],
                  "sameAs": [
                    "https://x.com/Agam_io",
                    "https://www.linkedin.com/in/agamjeet-padda/",
                    "https://github.com/Agamjeet"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://buildwithagam.com/#business",
                  "name": "buildwithagam",
                  "url": "https://buildwithagam.com/",
                  "image": "https://buildwithagam.com/me-4.jpeg",
                  "email": "paddaagamjeetsingh@gmail.com",
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "availableLanguage": ["English"],
                  "founder": { "@id": "https://buildwithagam.com/#person" },
                  "serviceType": [
                    "Web development",
                    "SaaS development",
                    "AI consultation",
                    "Business automation",
                    "Voice AI receptionist"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQJB525GER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQJB525GER');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
