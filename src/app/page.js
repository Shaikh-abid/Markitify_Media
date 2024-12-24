"use client";

import Companies from "@/components/Companies";
import ContactandFAQ from "@/Components/ContactandFAQ";
import Footer from "@/Components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/Components/Portfolio";
import Quotation from "@/components/Quotation";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Timepass from "@/Components/Timepass";

export default function Home() {
  return (
     <div className="overflow-hidden">
       <Navbar />
       <Hero />
       <Services />
       <Quotation />
       <Companies />
       <Testimonials />
       <Portfolio />

       <ContactandFAQ />
       <Footer />
       {/* <Timepass />  */}

      
    </div>
  );
}
