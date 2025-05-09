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
        <section className="animated-background text-white relative h-screen flex flex-col items-center justify-center text-center px-4">
          <div data-aos="fade-up">
            <div className="typewriter">
              <h1>Your Poker Journey Starts Here</h1>
            </div>
            <p className="text-xl max-w-xl mb-10">Explore platforms, tools, and expert strategies to level up your game.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/platforms">
                <button className="bg-[#f2cc67] text-[#24382c] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#ffcc53] hover:scale-105 transition-all duration-300">Explore Platforms</button>
              </Link>
              <Link href="/software">
                <button className="bg-white text-[#24382c] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#f2cc67] hover:scale-105 transition-all duration-300">Products</button>
              </Link>
              <Link href="/custom">
                <button className="bg-[#24382c] border border-[#f2cc67] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#1a2a20] hover:scale-105 transition-all duration-300">Services</button>
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

        {/* Poker Tips Section */}
        <section className="bg-[#1a2a20] text-white py-24 px-6" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#f2cc67] mb-8">Quick Poker Tips</h2>
            <div className="relative overflow-hidden h-40">
              <div className="animate-carousel space-y-6">
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up">“If you can’t spot the sucker in your first half hour at the table, then you are the sucker.” – Rounders</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="100">“Fold more often. Most new players lose by calling too much.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="200">“Position is power. Play more hands from the button and cutoff.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="300">“It’s not about the cards you’re dealt, but how you play them.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="400">“Bluff with purpose, not just impulse.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="500">“Never slowplay your monsters against loose opponents.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="600">“Every chip saved is a chip earned. Don’t waste chips calling bad bets.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="700">“Aggression wins tournaments. Don’t be afraid to put pressure.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="800">“Tilt control is skill. Walk away when emotions take over.”</blockquote>
                <blockquote className="text-xl italic opacity-90" data-aos="fade-up" data-aos-delay="900">“Great players fold great hands. Don’t marry your cards.”</blockquote>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .animate-carousel {
            display: flex;
            flex-direction: column;
            animation: scrollTips 30s linear infinite;
          }
          @keyframes scrollTips {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-100%); }
          }
        `}</style>

        {/* CTA */}
        <section className="text-center py-20 px-6 bg-white" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-4">Need Help Getting Started?</h3>
          <p className="text-lg max-w-xl mx-auto mb-6">Let us know your poker goals, and we’ll build your personal strategy toolkit.</p>
          <Link href="/custom">
            <button className="bg-[#24382c] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e2f25] transition-all hover:scale-105">
              Get Custom Help
            </button>
          </Link>
        </section>

        <section className="bg-[#ffcc53] text-[#24382c] py-20 px-6" data-aos="zoom-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Ready to Level Up Your Poker Game?</h2>
            <p className="text-lg mb-8">Join thousands of players getting weekly poker tips, tools, and exclusive content.</p>
            <Link href="/custom">
              <button className="bg-[#24382c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all hover:bg-[#1e2f25]">
                Get Custom Recommendations
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#24382c] text-[#f2cc67] text-sm">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}

