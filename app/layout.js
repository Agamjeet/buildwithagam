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

export const metadata = {
  title: "Agamjeet Singh Padda (Agam) | AI Developer & Data Scientist",
  description: "Agamjeet Singh Padda (Agam) - Expert AI Developer and Data Scientist specializing in Machine Learning, Deep Learning, and Data Science. Building innovative AI solutions and data-driven applications.",
  keywords: "Agamjeet Singh, Agamjeet, Agam, Agamjeet Singh Padda, AI Developer, Data Scientist, Machine Learning, Deep Learning, Python Developer, Data Science, Artificial Intelligence, ML Engineer, AI Engineer, Portfolio",
  authors: [{ name: "Agamjeet Singh Padda" }],
  creator: "Agamjeet Singh Padda",
  publisher: "Agamjeet Singh Padda",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Agamjeet Singh Padda | AI Developer & Data Scientist",
    description: "Expert AI Developer and Data Scientist specializing in Machine Learning, Deep Learning, and Data Science. Building innovative AI solutions and data-driven applications.",
    url: "https://agamjeet.in",
    siteName: "Agamjeet Singh Padda Portfolio",
    images: [
      {
        url: "/ME.jpg",
        width: 1200,
        height: 630,
        alt: "Agamjeet Singh Padda - AI Developer & Data Scientist",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamjeet Singh Padda | AI Developer & Data Scientist",
    description: "Expert AI Developer and Data Scientist specializing in Machine Learning, Deep Learning, and Data Science. Building innovative AI solutions and data-driven applications.",
    images: ["/ME.jpg"],
    creator: "@Agam_io",
  },
  icons: {
    icon: '/favi.png',
    apple: '/favi.png',
  },
  manifest: "/manifest.json",
  themeColor: "#36d1dc",
  viewport: "width=device-width, initial-scale=1.0",
  verification: {
    google: "googlef65beec6f0cd052f",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
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
              "jobTitle": "AI Developer & Data Scientist",
              "description": "Expert AI Developer and Data Scientist specializing in Machine Learning, Deep Learning, and Data Science",
              "knowsAbout": ["Machine Learning", "Deep Learning", "Data Science", "Artificial Intelligence", "Python", "SQL"],
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
