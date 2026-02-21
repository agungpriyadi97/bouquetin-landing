// app/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Pricing from "../components/sections/Pricing";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import BookingForm from "../components/sections/BookingForm";
import Location from "../components/sections/Location";
import FAQ from "../components/sections/FAQ";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { site } from "../data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Header />
      <Hero />
      <Highlights />
      <Pricing />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Location />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: site.name,
            description: site.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address,
              addressLocality: site.city,
              addressCountry: "ID",
            },
            telephone: `+${site.phoneE164}`,
          }),
        }}
      />
    </main>
  );
}