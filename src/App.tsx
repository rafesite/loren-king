import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Talks from './components/Talks';
import BookFor from './components/BookFor';
import Testimonials from './components/Testimonials';
import Media from './components/Media';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Lock scroll while the preloader is visible.
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          background: '#0a0a0a',
          minHeight: '100vh',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <Navigation />
        <main>
          <Hero active={loaded} />
          <About />
          <Talks />
          <BookFor />
          <Testimonials />
          <Media />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
