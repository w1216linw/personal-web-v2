import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main className="">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
