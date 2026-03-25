import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "agent-kernel — The easiest way to create an AI agent",
  description:
    "Three markdown files and a git repo. Your agent remembers between sessions, takes notes, and builds on past work. No framework, no database.",
  openGraph: {
    title: "agent-kernel — The easiest way to create an AI agent",
    description:
      "Three markdown files and a git repo. Clone, start, talk. It remembers.",
    url: "https://agent-kernel.dev",
    siteName: "agent-kernel",
  },
  twitter: {
    card: "summary_large_image",
    title: "agent-kernel — The easiest way to create an AI agent",
    description:
      "Three markdown files and a git repo. Clone, start, talk. It remembers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
