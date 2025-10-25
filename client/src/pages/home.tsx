import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import Outcomes from '@/components/Outcomes';
import Team from '@/components/Team';
import Activities from '@/components/Activities';
import Editorials from '@/components/Editorials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Outcomes />
        <Team />
        <Activities />
        <Editorials />
      </main>
      <Footer />
    </div>
  );
}
