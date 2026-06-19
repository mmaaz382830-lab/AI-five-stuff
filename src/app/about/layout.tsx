import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Five Stuff AI Reel Studio",
  description:
    "Learn why Mohammad Maaz built Five Stuff Studio as a personal creator tool for funny reel packages.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
