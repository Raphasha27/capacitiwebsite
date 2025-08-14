import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAPACITI - Tech Career Accelerator | Transform Your Future in Technology",
  description: "Join CAPACITI, South Africa's leading tech education provider. Master full-stack development, data science, mobile apps, and cloud computing through industry-aligned bootcamps and courses. 85% job placement rate with top tech companies.",
  keywords: [
    "tech education",
    "coding bootcamp",
    "web development",
    "data science",
    "mobile app development",
    "cloud computing",
    "career change",
    "South Africa",
    "Cape Town",
    "Johannesburg",
    "tech skills",
    "programming",
    "software development",
    "CAPACITI"
  ],
  authors: [{ name: "CAPACITI Team" }],
  creator: "CAPACITI",
  publisher: "UWU Africa",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.capaciti.org.za",
    siteName: "CAPACITI - Tech Career Accelerator",
    title: "CAPACITI - Transform Your Future in Technology",
    description: "Master in-demand tech skills through industry-aligned programs. 500+ graduates, 85% job placement rate with leading companies like Google, Microsoft, and Meta.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CAPACITI - Tech Career Accelerator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPACITI - Tech Career Accelerator",
    description: "Transform your career with world-class tech education. Join 500+ graduates working at top companies.",
    images: ["/twitter-image.jpg"],
    creator: "@capaciti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.capaciti.org.za",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CAPACITI",
              "description": "Tech Career Accelerator providing world-class technology education in South Africa",
              "url": "https://www.capaciti.org.za",
              "logo": "https://www.capaciti.org.za/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Greenacres",
                "addressLocality": "Qgeberha",
                "postalCode": "6001",
                "addressCountry": "ZA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+27-21-003-7509",
                "contactType": "customer service",
                "email": "hello@capaciti.org.za"
              },
              "sameAs": [
                "https://facebook.com/capaciti",
                "https://twitter.com/capaciti",
                "https://linkedin.com/company/capaciti",
                "https://instagram.com/capaciti",
                "https://youtube.com/capaciti"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Analytics and tracking scripts would go here */}
      </body>
    </html>
  );
}
