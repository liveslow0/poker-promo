// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
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
      <header
  id="nav"
  className="fixed w-full z-50 top-0 transition-all duration-300 px-6 py-4"
>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-[#ffcc53] font-bold text-2xl">Poker.Promo</h1>
    <nav className="space-x-6 hidden md:block">
      <Link href="/platforms"><a className="hover:text-[#f2cc67]">Platforms</a></Link>
      <Link href="/about"><a className="hover:text-[#f2cc67]">Beginners</a></Link>
      <Link href="/software"><a className="hover:text-[#f2cc67]">Software</a></Link>
      <Link href="/stories"><a className="hover:text-[#f2cc67]">Stories</a></Link>
      <Link href="/custom"><a className="hover:text-[#f2cc67]">Contact</a></Link>
    </nav>
  </div>
</header>


      <main className="bg-white text-[#24382c]">
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/poker-hero.jpg)' }}>
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  <div className="z-10 text-center text-white px-4" data-aos="fade-in">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Poker Journey Starts Here</h1>
    <p className="text-lg md:text-xl mb-6">Guiding you through the best platforms, stories, and tools.</p>
    <Link href="/platforms">
      <a className="bg-[#f2cc67] text-[#24382c] px-6 py-3 rounded-full hover:bg-[#ffcc53] font-semibold transition">Explore Platforms</a>
    </Link>
  </div>
</section>


        <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#24382c] mb-4">Top Poker Platforms</h3>
            <ul className="space-y-3 text-lg">
              <li><a href="https://www.pokerstars.com" target="_blank" className="text-[#24382c] hover:text-[#f2cc67] underline">PokerStars</a> – Massive traffic and tournament variety.</li>
              <li><a href="https://www.ggpoker.com" target="_blank" className="text-[#24382c] hover:text-[#f2cc67] underline">GGPoker</a> – Built-in tools, fun interface, staking.</li>
              <li><a href="https://www.partypoker.com" target="_blank" className="text-[#24382c] hover:text-[#f2cc67] underline">PartyPoker</a> – Strong software and fair play.
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1545060894-3dffa8e8c9c7?auto=format&fit=crop&w=1470&q=80"
              alt="Poker Platforms"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="bg-white text-[#24382c] py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
    <div data-aos="fade-up">
      <img src="/assets/icon1.svg" className="mx-auto mb-4 w-16" />
      <h3 className="text-xl font-semibold mb-2">Verified Platforms</h3>
      <p className="text-sm">We recommend only the most trusted online poker sites.</p>
    </div>
    <div data-aos="fade-up" data-aos-delay="100">
      <img src="/assets/icon2.svg" className="mx-auto mb-4 w-16" />
      <h3 className="text-xl font-semibold mb-2">Beginner Guides</h3>
      <p className="text-sm">Learn the basics and start playing in minutes.</p>
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <img src="/assets/icon3.svg" className="mx-auto mb-4 w-16" />
      <h3 className="text-xl font-semibold mb-2">Advanced Tools</h3>
      <p className="text-sm">Access HUDs, solvers, and bankroll managers.</p>
    </div>
  </div>
</section>



        <section className="bg-[#f2cc67] text-[#24382c] py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1602288637782-0b7b47a3ff0e?auto=format&fit=crop&w=1470&q=80"
                alt="Why Poker.Promo"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose Poker.Promo?</h3>
              <ul className="space-y-2 text-lg list-disc list-inside">
                <li>🎯 Curated platform reviews for all levels</li>
                <li>📚 Beginner-friendly guides with expert insights</li>
                <li>🧠 Poker tools and software to gain an edge</li>
                <li>🃏 Real-life poker stories that teach and entertain</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20 px-6 text-center">
          <h3 className="text-3xl font-bold text-[#24382c] mb-4">Need Help Getting Started?</h3>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Tell us your poker goals and we’ll guide you to the perfect tools, platforms, or content. Let’s build your poker journey together.
          </p>
          <Link
            href="/custom"
            className="inline-block bg-[#24382c] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1e2f25] transition"
          >
            Request Custom Help
          </Link>
        </section>
      </main>

      <footer className="bg-[#24382c] text-center py-6 text-sm text-[#f2cc67]">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}