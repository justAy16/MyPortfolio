import About from "@/app/components/About";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { Intro } from "@/app/components/Intro";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import Projects from "@/app/components/Projects";


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
