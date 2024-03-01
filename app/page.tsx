import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Intro } from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
     <Navbar/>
     <div className="container mt-24 mx-auto px-12 py-4">
     <Intro/>
     <About/>
     <Projects/>
     <ContactSection/>
     </div>
     <Footer/>
     <Navigation/>
    </main>
  );
}
