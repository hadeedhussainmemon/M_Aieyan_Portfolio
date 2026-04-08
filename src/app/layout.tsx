import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Aieyan Channa | Petrochemical Student @ NED",
    template: "%s | Muhammad Aieyan Channa",
  },
  description: "Muhammad Aieyan Channa is a Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi, focused on material science and process analysis.",
  keywords: [
    "Muhammad Aieyan Channa",
    "Aieyan Channa",
    "Muhammad Aieyan Channa NED",
    "Petrochemical Engineering Student",
    "NED University Portfolio",
    "Polymer Engineering Karachi"
  ],
  authors: [{ name: "Muhammad Aieyan Channa" }],
  creator: "Muhammad Aieyan Channa",
  category: "Education",
  metadataBase: new URL('https://muhammadaieyanchanna.vercel.app'),
  applicationName: "Muhammad Aieyan Channa",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
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
  appleWebApp: {
    title: "Aieyan Channa",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: '/',
    languages: {
      "en-US": "/",
    },
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Muhammad Aieyan Channa | Petrochemical Student @ NED",
    description: "Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi, focused on material science and process analysis.",
    url: "https://muhammadaieyanchanna.vercel.app",
    siteName: "Muhammad Aieyan Channa",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Aieyan Channa portfolio preview",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Aieyan Channa | Petrochemical @ NED",
    description: "Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi, focused on material science and process analysis.",
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
                "givenName": "Muhammad Aieyan",
                "familyName": "Channa",
                "alternateName": ["Aieyan Channa"],
                "url": "https://muhammadaieyanchanna.vercel.app",
                "mainEntityOfPage": "https://muhammadaieyanchanna.vercel.app",
                "jobTitle": "Petrochemical & Polymer Engineering Student",
                "affiliation": {
                  "@type": "Organization",
                  "name": "NED University of Engineering & Technology"
                },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Polymer and Petrochemical Engineering Student"
                },
                "image": "https://muhammadaieyanchanna.vercel.app/icon.png",
                "description": "Muhammad Aieyan Channa is a Polymer and Petrochemical Engineering student at NED University of Engineering & Technology in Karachi.",
                "knowsAbout": ["Polymer Kinetics", "Petrochemical Refining", "Catalysis", "Thermodynamics", "Process Dynamics"],
                "knowsLanguage": ["English", "Urdu"],
                "memberOf": {
                  "@type": "Organization",
                  "name": "NED University of Engineering & Technology"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karachi",
                  "addressRegion": "Sindh",
                  "addressCountry": "PK"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/muhammad-aieyan-channa-1434213a7/"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "contactType": "professional",
                    "email": "mailto:Chanaieyan245@gmail.com"
                  }
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
                "url": "https://muhammadaieyanchanna.vercel.app",
                "inLanguage": "en-PK",
                "publisher": {
                  "@id": "https://muhammadaieyanchanna.vercel.app/#person"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2026-03-23T00:00:00Z",
                "dateModified": new Date().toISOString(),
                "inLanguage": "en-PK",
                "about": {
                  "@id": "https://muhammadaieyanchanna.vercel.app/#person"
                },
                "mainEntity": {
                  "@id": "https://muhammadaieyanchanna.vercel.app/#person"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Featured Engineering Projects",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "POLYMER_KINETICS"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "PETRO_REFINING_ANALYSIS"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "MATERIAL_PROPERTIES_LAB"
                  }
                ]
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
                      "text": "Muhammad Aieyan Channa is a Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi. He is focused on material science, process analysis, and practical engineering problem-solving through academic projects and hands-on learning."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where does Muhammad Aieyan Channa study?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "This portfolio states he is pursuing a Bachelor of Engineering (BE) in Polymer and Petrochemical Engineering at NED University of Engineering & Technology (2025-2029)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the skills of Muhammad Aieyan Channa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Listed skills include Polymer Chemistry, Petrochemical Processes, Thermodynamics, Reactor Design, and Material Analysis, along with prior experience in inventory management and teaching."
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
