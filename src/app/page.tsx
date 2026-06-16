import About from '@/components/about';
import Background from '@/components/background';
import Contact from '@/components/contact';
import CursorGlow from '@/components/cursor-glow';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import ScrollProgress from '@/components/scroll-progress';

export default function Home() {
  return (
    <>
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
