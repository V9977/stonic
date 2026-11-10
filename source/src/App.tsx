import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Looks from '@/components/Looks';
import Reviews from '@/components/Reviews';
import Find from '@/components/Find';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="site-shell min-h-screen font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Looks />
        <Reviews />
        <Find />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
