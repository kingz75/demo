import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Results from "@/components/Results";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="site-shell w-[min(calc(100%-2rem),1220px)] mx-auto pb-16">
      <Header />
      <main>
        <Hero />
        {/* <FeatureStrip /> */}
        <Features />
        <Workflow />
        {/* <Results /> */}
        <ContactForm />
      </main>
    </div>
  );
}
