import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Alekseenko - Head of QA Engineering",
  description: "QA Leadership professional specializing in building global teams, test automation, and strategic quality transformation. Based in Dubai, UAE.",
  keywords: ["QA Engineering", "Test Automation", "Team Leadership", "Quality Strategy", "Dubai", "Alex Alekseenko"],
  authors: [{ name: "Alex Alekseenko" }],
  openGraph: {
    title: "Alex Alekseenko - Head of QA Engineering",
    description: "QA Leadership professional specializing in building global teams, test automation, and strategic quality transformation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}