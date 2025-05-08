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
        {/* Hero */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4" data-aos="zoom-in">
          <h2 className="text-5xl font-bold text-[#f2cc67] mb-4">Your Poker Journey Starts Here</h2>
          <p className="text-xl max-w-xl mb-6">Explore platforms, tools, and expert strategies to level up your game.</p>
          <Link href="/platforms">
            <button className="bg-[#f2cc67] text-[#24382c] font-semibold px-8 py-3 rounded-full hover:bg-[#ffcc53] transition-all hover:scale-105">
              Explore Platforms
            </button>
          </Link>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-white text-[#24382c]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            {/* Verified Platforms */}
            <div data-aos="fade-up" className="hover:scale-105 transition-all duration-300">
              <img src="/assets/icon1.svg" className="mx-auto mb-4 w-16" />
              <h3 className="text-xl font-semibold mb-2">Verified Platforms</h3>
              <p className="text-sm mb-4">Only trusted, regulated poker rooms make our list.</p>
              <Link href="/platforms">
                <button className="text-sm bg-[#24382c] text-white px-4 py-2 rounded-full hover:bg-[#1e2f25] transition">
                  Compare Sites
                </button>
              </Link>
            </div>

            {/* Beginner Guides */}
            <div data-aos="fade-up" data-aos-delay="100" className="hover:scale-105 transition-all duration-300">
              <img src="/assets/icon2.svg" className="mx-auto mb-4 w-16" />
              <h3 className="text-xl font-semibold mb-2">Beginner Guides</h3>
              <p className="text-sm mb-4">Start from zero with interactive, visual walkthroughs.</p>
              <Link href="/about">
                <button className="text-sm bg-[#24382c] text-white px-4 py-2 rounded-full hover:bg-[#1e2f25] transition">
                  Read Guides
                </button>
              </Link>
            </div>

            {/* Advanced Tools */}
            <div data-aos="fade-up" data-aos-delay="200" className="hover:scale-105 transition-all duration-300">
              <img src="/assets/icon3.svg" className="mx-auto mb-4 w-16" />
              <h3 className="text-xl font-semibold mb-2">Advanced Tools</h3>
              <p className="text-sm mb-4">We review software, solvers, and pro tools to gain edge.</p>
              <Link href="/software">
                <button className="text-sm bg-[#24382c] text-white px-4 py-2 rounded-full hover:bg-[#1e2f25] transition">
                  See Tools
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#f2cc67] text-[#24382c] py-20 px-6" data-aos="fade-up">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose Poker.Promo?</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>🎯 Curated reviews for all levels</li>
                <li>📚 Beginner-friendly walkthroughs</li>
                <li>🧠 Advanced strategies and tools</li>
                <li>🃏 Real poker stories & lessons</li>
              </ul>
              <Link href="/stories">
                <button className="mt-6 bg-[#24382c] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e2f25] transition">
                  Read Poker Stories
                </button>
              </Link>
            </div>
            <div data-aos="zoom-in" data-aos-delay="150" className="p-8 border-4 border-dashed border-[#24382c] rounded-lg">
              <p className="text-xl font-semibold text-center">"Poker.Promo helped me choose the right site & tools to finally win consistently!"</p>
              <p className="mt-4 text-right font-medium text-[#24382c]">– A happy player</p>
            </div>
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
