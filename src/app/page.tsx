import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Properties from "@/components/Properties";
import WhyUs from "@/components/WhyUs";
import Enquiry from "@/components/Enquiry";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Properties />
      <WhyUs />
      <Enquiry />
      <Contact />
      <Footer />
    </main>
  );
}
