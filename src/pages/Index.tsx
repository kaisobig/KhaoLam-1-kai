import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BuffetSets from "@/components/BuffetSets";
import About from "@/components/About";
import Gifts from "@/components/Gifts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BuffetSets />
        <About />
        <Gifts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
