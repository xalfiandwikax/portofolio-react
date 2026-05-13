// src/App.jsx

import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import PricingTable from "./component/PricingTable";
import Mapcoverage from "./component/Mapcoverage";
import ContactISP from "./component/ContactISP";
import Footer from "./component/Footer";
import Service from "./component/Service";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section id="home" className="scroll-mt-32">
        <HeroSection
          title="Internet Service Provider untuk Rumah dan Bisnis Anda"
          subtitle="TELEPORT.NET - Provider Fiber Optic Tercepat di Indonesia"
          ctaText="CEK KETERSEDIAAN"
        />
      </section>

      {/* Coverage */}
      <section id="coverage" className="scroll-mt-40">
        <Mapcoverage />
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-32">
        <Service />
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-32">
        <PricingTable />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32">
        <ContactISP />
      </section>

      {/* Footer */}
      <Footer
        companyName="TELEPORT.NET"
        address="Jl. Gatot Subroto No. 42, Jakarta Selatan"
        phone="+62 21 1234 5678"
        email="cs@teleport.net"
      />

    </div>
  );
}

export default App;