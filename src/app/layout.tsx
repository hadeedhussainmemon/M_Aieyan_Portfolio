import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Aieyan Channa | Petrochemical & Polymer Engineering Student",
  description: "Official portfolio of Muhammad Aieyan Channa, a Petrochemical and Polymer Engineering student at NED University. Expert in process design, plastics, and industrial safety.",
  keywords: [
    "Muhammad Aieyan Channa", "Aieyan Channa", "Muhammad Aieyan Channa NED", 
    "Muahmmad Aieyan Channa", "Aiayan Channa", "Aeiyan Channa", "Aeiyan Memon", 
    "Petrochemical Engineering Student", "NED University Portfolio", 
    "Polymer specialist Karachi", "Muhammad Aieyan Channa NEDUET"
  ],
  authors: [{ name: "Muhammad Aieyan Channa" }],
  metadataBase: new URL('https://muhammadaieyanchanna.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Muhammad Aieyan Channa | Petrochemical & Polymer Engineering Student",
    description: "The official technical profile of Muhammad Aieyan Channa at NED University. Exploring the future of Petrochemical & Polymer industries.",
    url: "https://muhammadaieyanchanna.vercel.app",
    siteName: "Muhammad Aieyan Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Aieyan | Petrochemical Engineer",
    description: "Technical portfolio of Muhammad Aieyan, specialized in Polymer and Petrochemical Engineering.",
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "MfthzTxiKJ5K2FXjdohxGlRRmMSleS0lI2pQ1RKMWI4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Aieyan Channa",
              "alternateName": ["Aeiyan", "Aieyan Channa", "Aieyan Memon", "Aeiyan Channa", "Aeiyan Memon"],
              "url": "https://muhammadaieyanchanna.vercel.app",
              "jobTitle": "Petrochemical Engineering Student",
              "description": "Muhammad Aieyan Channa is a Petrochemical and Polymer Engineering student at NED University, focusing on advanced material science and industrial process optimization.",
              "knowsAbout": [
                "Polymer Engineering",
                "Petrochemical Engineering",
                "Process Optimization",
                "Material Science",
                "Industrial Safety",
                "Reactor Mechanics"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "NED University of Engineering & Technology"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "NED University of Engineering & Technology"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://www.linkedin.com/in/muhammad-aieyan-channa-1434213a7/",
                "https://github.com/muhammad-aieyan"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
