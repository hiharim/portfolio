import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Career } from './components/Career';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Career />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}