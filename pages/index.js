import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);


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
        <section className="relative h-screen flex items-center justify-center bg-[#24382c] text-white px-4">
  <div data-aos="fade-up" className="text-center">
    <div className="typewriter">
  <h1>Your Poker Journey Starts Here</h1>
</div>
</h2>
    <p className="text-xl max-w-xl mb-10">Explore platforms, tools, and expert strategies to level up your game.</p>
    
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link href="/platforms">
        <button className="btn-primary">Explore Platforms</button>
      </Link>
      <Link href="/software">
        <button className="btn-secondary">Products</button>
      </Link>
      <Link href="/custom">
        <button className="btn-outline">Services</button>
      </Link>
    </div>
  </div>
</section>



        {/* Features Grid */}
  <section className="bg-white py-24 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-[#24382c] mb-4">Explore What's Inside</h2>
    <p className="text-lg text-[#24382c]">Each page on Poker.Promo is built to elevate your skills, understanding, and results.</p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">
    {/* Platforms */}
    <Link href="/platforms">
      <div className="bg-[#f2cc67] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in">
        <h3 className="text-2xl font-bold mb-2">Top Platforms</h3>
        <p>Compare trusted poker sites based on traffic, tournaments, software, and player reviews.</p>
      </div>
    </Link>

    {/* For Beginners */}
    <Link href="/about">
      <div className="bg-[#24382c] text-white p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-2">Start from Scratch</h3>
        <p>New to poker? Learn rules, hand rankings, and simple strategies to build confidence fast.</p>
      </div>
    </Link>

    {/* Poker Software */}
    <Link href="/software">
      <div className="bg-[#ffcc53] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-2">Tools & Software</h3>
        <p>Explore HUDs, solvers, tracking apps, and AI tools pros use to gain an edge.</p>
      </div>
    </Link>

    {/* Poker Stories */}
    <Link href="/stories">
      <div className="bg-[#24382c] text-white p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="300">
        <h3 className="text-2xl font-bold mb-2">Epic Stories</h3>
        <p>Insane hands. High-stakes drama. Learn through legendary poker moments from real games.</p>
      </div>
    </Link>

    {/* Custom Requests */}
    <Link href="/custom">
      <div className="bg-[#f2cc67] text-[#24382c] p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-2">Need Advice?</h3>
        <p>Let us recommend platforms, tools or content based on your goals. We’re poker advisors.</p>
      </div>
    </Link>
  </div>
</section>

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
