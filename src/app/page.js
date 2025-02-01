import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceSection from "./components/ServiceSection";
import WhyChooseSection from "./components/WhyChooseSection";
import FutureIdentitySection from "./components/FutureIdentitySection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main
      className="px-[20px] flex min-h-screen flex-col bg-[#0E0C15] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/projects/Landing-page.png')",
      }}
    >
      <Navbar />
      <div className="container mt-[100px] md:mt-[150px] lg:mt-[170px] mx-auto">
        <HeroSection />
        <ServiceSection />
        <WhyChooseSection />
        <Testimonial />
        <FutureIdentitySection />
      </div>
      <Footer />
    </main>
  );
}
