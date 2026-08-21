import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="about" className="pt-28 pb-16">
        <About />
      </section>
      <section id="services" className="pt-28 pb-16">
        <Services />
      </section>
      <Portfolio />
      <ContactSection />
    </main>
  );
}
