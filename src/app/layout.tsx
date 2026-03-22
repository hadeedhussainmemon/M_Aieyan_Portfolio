import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Aieyan | Petrochemical & Polymer Engineering Specialist",
  description: "Explore the professional portfolio of Muhammad Aieyan (also known as Aieyan Channa or Aieyan Memon), a dedicated Petrochemical and Polymer Engineering specialist at NED University.",
  keywords: ["Muhammad Aieyan", "Aieyan Channa", "Aieyan Memon", "Aeiyan Channa", "Aeiyan Memon", "Aeiyan", "Petrochemical Engineer Karachi", "Polymer Engineering NED", "Process Safety Management", "Material Science Portfolio", "Aieyan Portfolio"],
  authors: [{ name: "Muhammad Aieyan" }],
  metadataBase: new URL('https://aieyan-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammad Aieyan | Petrochemical Engineer",
    description: "Explore the technical portfolio and research of Muhammad Aieyan, specializing in Polymer and Petrochemical Engineering.",
    url: "https://aieyan.io", // Placeholder, user will update
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
              "name": "Muhammad Aieyan",
              "alternateName": ["Aeiyan", "Aieyan Channa", "Aieyan Memon", "Aeiyan Channa", "Aeiyan Memon"],
              "url": "https://aieyan-portfolio.vercel.app",
              "jobTitle": "Petrochemical Engineer",
              "description": "Muhammad Aieyan is a specialized Petrochemical and Polymer Engineer at NED University, focusing on advanced material science and industrial process optimization.",
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
                "https://www.linkedin.com/in/muhammad-aieyan", // Placeholder
                "https://github.com/muhammad-aieyan" // Placeholder
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
