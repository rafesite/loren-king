import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AuthorityBar from './components/AuthorityBar';
import FeaturedIn from './components/FeaturedIn';
import About from './components/About';
import Talks from './components/Talks';
import BookFor from './components/BookFor';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Podcast from './components/Podcast';
import Nonprofit from './components/Nonprofit';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <AuthorityBar />
        <FeaturedIn />
        <About />
        <Talks />
        <BookFor />
        <Schedule />
        <Testimonials />
        <Podcast />
        <Nonprofit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
