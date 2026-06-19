import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

/* #5 Gradient divider between sections */
function Divider() {
  return <hr className="section-divider" aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <HowItWorks />
      <Divider />
      <CTA />
    </div>
  );
}
