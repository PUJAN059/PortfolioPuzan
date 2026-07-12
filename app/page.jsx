import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}
