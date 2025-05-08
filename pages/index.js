import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-[#24382c]');
      } else {
        nav.classList.remove('shadow-lg', 'bg-[#24382c]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#24382c] text-white font-sans">
      {/* Header */}
      <header
        id="nav"
        className="fixed w-full z-50 top-0 transition-all duration-300 px-6 py-4 bg-[#24382c]"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#ffcc53] font-bold text-2xl">Poker.Promo</h1>
          <nav className="space-x-6 hidden md:block">
            <Link href="/platforms" className="hover:text-[#f2cc67] transition">Platforms</Link>
            <Link href="/about" className="hover:text-[#f2cc67] transition">Beginners</Link>
            <Link href="/software" className="hover:text-[#f2cc67] transition">Software</Link>
            <Link href="/stories" className="hover:text-[#f2cc67] transition">Stories</Link>
            <Link href="/custom" className="hover:text-[#f2cc67] transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="bg-white text-[#24382c] pt-24">
        {/* Hero Section */}
        <section className="hypnotic-bg text-white h-screen flex flex-col items-center justify-center text-center px-4">
  <div className="hypnotic-content" data-aos="fade-up">
    <h1 className="text-5xl md:text-6xl font-bold text-[#f2cc67] mb-6">Your Poker Journey Starts Here</h1>
    <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white">
      Explore expert strategies, trusted platforms, and tools that give you the edge.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link href="/platforms">
        <button className="bg-[#f2cc67] text-[#24382c] font-bold px-6 py-3 rounded-full hover:bg-[#ffcc53] hover:scale-105 shadow-xl transition-all duration-300">
          Explore Platforms
        </button>
      </Link>
      <Link href="/software">
        <button className="bg-white text-[#24382c] font-bold px-6 py-3 rounded-full hover:bg-[#f2cc67] hover:scale-105 shadow-xl transition-all duration-300">
          Our Products
        </button>
      </Link>
      <Link href="/custom">
        <button className="bg-[#24382c] border-2 border-[#f2cc67] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1a2a20] hover:scale-105 shadow-xl transition-all duration-300">
          Get Custom Help
        </button>
      </Link>
    </div>
  </div>
</section>


        {/* What's Inside Grid */}
        <section className="bg-white py-24 px-6" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#24382c] mb-4">Explore What's Inside</h2>
            <p className="text-lg text-[#24382c]">Each page on Poker.Promo is built to elevate your skills, understanding, and results.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/platforms">
              <div className="bg-[#f2cc67] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in">
                <h3 className="text-2xl font-bold mb-2">Top Platforms</h3>
                <p>Compare trusted poker sites based on traffic, tournaments, software, and player reviews.</p>
              </div>
            </Link>
            <Link href="/about">
              <div className="bg-[#24382c] text-white p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="text-2xl font-bold mb-2">Start from Scratch</h3>
                <p>New to poker? Learn rules, hand rankings, and simple strategies to build confidence fast.</p>
              </div>
            </Link>
            <Link href="/software">
              <div className="bg-[#ffcc53] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="text-2xl font-bold mb-2">Tools & Software</h3>
                <p>Explore HUDs, solvers, tracking apps, and AI tools pros use to gain an edge.</p>
              </div>
            </Link>
            <Link href="/stories">
              <div className="bg-[#24382c] text-white p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
                <h3 className="text-2xl font-bold mb-2">Epic Stories</h3>
                <p>Insane hands. High-stakes drama. Learn through legendary poker moments from real games.</p>
              </div>
            </Link>
            <Link href="/custom">
              <div className="bg-[#f2cc67] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="400">
                <h3 className="text-2xl font-bold mb-2">Need Advice?</h3>
                <p>Let us recommend platforms, tools or content based on your goals. We’re poker advisors.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 px-6 bg-white" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-4">Need Help Getting Started?</h3>
          <p className="text-lg max-w-xl mx-auto mb-6">Let us know your poker goals, and we’ll build your personal strategy toolkit.</p>
          <Link href="/custom">
            <button className="bg-[#24382c] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e2f25] transition-all hover:scale-105">
              Get Custom Help
            </button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#24382c] text-[#f2cc67] text-sm">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}
