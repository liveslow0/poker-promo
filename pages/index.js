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

{/* =========================
    POKER STORIES SECTION
   ========================= */}
<section className="bg-[#24382c] text-white py-24 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-[#f2cc67]">Legendary Poker Stories</h2>
    <div className="space-y-12">
      <div className="p-6 bg-[#1a2a20] rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-2">Phil Ivey’s $1M Bluff vs Paul Jackson</h3>
        <p className="text-sm leading-relaxed">In a hand that has become poker folklore, Ivey and Jackson played a bluff war with nothing in hand — raising and re-raising each other into oblivion. Neither had a pair, but Ivey’s final bet forced a fold and won the pot with 3-high!</p>
      </div>
      <div className="p-6 bg-[#1a2a20] rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-2">Tom Dwan vs Barry Greenstein – $919K Pot</h3>
        <p className="text-sm leading-relaxed">Holding just a draw, Dwan triple-barreled into a monster from Barry. With pure guts and timing, he made the legend fold the best hand, showing the new generation had arrived.</p>
      </div>
    </div>
  </div>
</section>

{/* =========================
    POKER STATS SECTION
   ========================= */}
<section className="bg-white text-[#24382c] py-24 px-6" data-aos="zoom-in">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">What Are The Odds?</h2>
    <p className="text-lg mb-8">Ever wonder how rare that Full House or Royal Flush really is? Here’s the math behind it:</p>
    <img src="/assets/poker-hands-probability-chart.png" alt="Poker Stats Chart" className="rounded-lg shadow-lg mx-auto w-full md:w-3/4" />
    <p className="text-sm mt-6">Based on Texas Hold'em hand data. Source: WSOP Analysis & Poker Probabilities Study (2023)</p>
  </div>
</section>

{/* =========================
    POKER TIPS CAROUSEL
   ========================= */}
<section className="bg-[#1a2a20] text-white py-24 px-6" data-aos="fade-up">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#f2cc67] mb-8">Quick Poker Tips</h2>
    <div className="relative overflow-hidden h-40">
      <div className="animate-carousel space-y-6">
        <blockquote className="text-xl italic opacity-90">“If you can’t spot the sucker in your first half hour at the table, then you are the sucker.” – Matt Damon, Rounders</blockquote>
        <blockquote className="text-xl italic opacity-90">“Fold more often. Most new players lose by calling too much.”</blockquote>
        <blockquote className="text-xl italic opacity-90">“Position is power. Play more hands from the button and cutoff.”</blockquote>
        <blockquote className="text-xl italic opacity-90">“It’s not about the cards you’re dealt, but how you play them.”</blockquote>
        <blockquote className="text-xl italic opacity-90">“Bluff with purpose, not just impulse.”</blockquote>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  .animate-carousel {
    display: flex;
    flex-direction: column;
    animation: scrollTips 25s linear infinite;
  }
  @keyframes scrollTips {
    0% { transform: translateY(0%); }
    20% { transform: translateY(-100%); }
    40% { transform: translateY(-200%); }
    60% { transform: translateY(-300%); }
    80% { transform: translateY(-400%); }
    100% { transform: translateY(0%); }
  }
`}</style>


  
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


      {/* Footer */}
      <footer className="text-center py-6 bg-[#24382c] text-[#f2cc67] text-sm">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}
