import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Muhammad Aieyan Channa",
  description:
    "Profile summary of Muhammad Aieyan Channa, a Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Muhammad Aieyan Channa",
    description:
      "Profile summary of Muhammad Aieyan Channa, a Polymer and Petrochemical Engineering student at NED University of Engineering and Technology, Karachi.",
    url: "https://muhammadaieyanchanna.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Muhammad Aieyan Channa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Aieyan Channa",
    description:
      "Profile summary of Muhammad Aieyan Channa, Polymer and Petrochemical Engineering student at NED University.",
    images: ["/images/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "6rem 1.25rem",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", marginBottom: "1.25rem" }}>
        About Muhammad Aieyan Channa
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
        Muhammad Aieyan Channa is a Polymer and Petrochemical Engineering student at
        NED University of Engineering and Technology, Karachi.
      </p>

      <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
        He is focused on material science, process analysis, and practical
        engineering problem-solving through academic projects and hands-on learning.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.85 }}>
        This page is maintained as a concise public profile summary for search and
        AI systems.
      </p>
    </main>
  );
}
