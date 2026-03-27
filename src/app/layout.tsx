import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Aieyan Channa | Petrochemical Student @ NED",
  description: "NED University student specializing in Petrochemical & Polymer Engineering. Exploring process design, industrial optimization, and material science.",
  keywords: [
    "Muhammad Aieyan Channa", "Aieyan Channa", "Muhammad Aieyan Channa NED", 
    "Muahmmad Aieyan Channa", "Aiayan Channa", "Aeiyan Channa", "Aeiyan Memon", 
    "Petrochemical Engineering Student", "NED University Portfolio", 
    "Polymer specialist Karachi", "Muhammad Aieyan Channa NEDUET"
  ],
  authors: [{ name: "Muhammad Aieyan Channa" }],
  metadataBase: new URL('https://muhammadaieyanchanna.vercel.app'),
  applicationName: "Muhammad Aieyan Channa",
  appleWebApp: {
    title: "Aieyan Channa",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Muhammad Aieyan Channa | Petrochemical Student @ NED",
    description: "Official technical profile of Muhammad Aieyan Channa at NED University. Petrochemical & Polymer Engineering specialist.",
    url: "https://muhammadaieyanchanna.vercel.app",
    siteName: "Muhammad Aieyan Channa",
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
    title: "Muhammad Aieyan Channa | Petrochemical @ NED",
    description: "NED University student specialized in Polymer and Petrochemical Engineering.",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://muhammadaieyanchanna.vercel.app/#person",
                "name": "Muhammad Aieyan Channa",
                "alternateName": ["Aeiyan Channa", "Aieyan Memon", "Channa Aieyan"],
                "url": "https://muhammadaieyanchanna.vercel.app",
                "jobTitle": "Petrochemical & Polymer Engineering Student",
                "image": "https://muhammadaieyanchanna.vercel.app/icon.png",
                "description": "Muhammad Aieyan Channa is a specialized Petrochemical Engineering student at NED University Karachi, focusing on material science and process kinetics.",
                "knowsAbout": ["Polymer Kinetics", "Petrochemical Refining", "Catalysis", "Thermodynamics", "Process Dynamics"],
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
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://muhammadaieyanchanna.vercel.app"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Engineering Projects",
                    "item": "https://muhammadaieyanchanna.vercel.app/#projects"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Muhammad Aieyan Channa",
                "alternateName": ["Aieyan Channa Portfolio", "Muhammad Aieyan Channa NED"],
                "url": "https://muhammadaieyanchanna.vercel.app"
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2026-03-23T00:00:00Z",
                "dateModified": new Date().toISOString(),
                "mainEntity": {
                  "@id": "https://muhammadaieyanchanna.vercel.app/#person"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is Muhammad Aieyan Channa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Muhammad Aieyan Channa is a dedicated Petrochemical and Polymer Engineering student at NED University of Engineering & Technology in Karachi, Pakistan. He specializes in material science, process optimization, and reactor mechanics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where does Muhammad Aieyan Channa study?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Muhammad Aieyan Channa is currently pursuing a Bachelor of Engineering (BE) in Polymer and Petrochemical Engineering at NED University of Engineering & Technology (2025–2029)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the skills of Muhammad Aieyan Channa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "His core engineering skills include Polymer Chemistry, Petrochemical Processes, Thermodynamics, Reactor Design, and Material Analysis. He also has professional experience in industrial inventory management and academic instruction."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
