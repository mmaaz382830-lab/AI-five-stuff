import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Five Stuff AI Reel Studio",
  description:
    "Explore Five Stuff Studio stats, curation notes, FAQs, submissions, and upcoming features.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
