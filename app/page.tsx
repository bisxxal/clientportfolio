 
import About from "@/components/About";
import Contact from "@/components/Contact";
import Fotter from "@/components/Fotter";
import Hro from "@/components/Hro";
import MarqueeDemo from "@/components/Review";

export default function Home() {
  return (
   <main className=" min-h-screen ">
 <Hro/>
 <About />
 <MarqueeDemo />
 <Contact />
 <Fotter />
   </main>
  );
}
