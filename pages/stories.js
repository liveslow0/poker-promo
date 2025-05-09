// pages/stories.js
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Stories() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
            <Link href="/" className="hover:text-[#f2cc67] transition">Home</Link>
            <Link href="/platforms" className="hover:text-[#f2cc67] transition">Platforms</Link>
            <Link href="/about" className="hover:text-[#f2cc67] transition">Beginners</Link>
            <Link href="/software" className="hover:text-[#f2cc67] transition">Software</Link>
            <Link href="/custom" className="hover:text-[#f2cc67] transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="pt-28 px-6">
        <section className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-[#f2cc67] mb-12">Legendary Poker Stories</h2>

          <div className="space-y-12">
            {[
              {
                title: "Phil Ivey’s $1M Bluff vs Paul Jackson",
                story: "In a hand that has become poker folklore, Ivey and Jackson played a bluff war with nothing in hand — raising and re-raising each other into oblivion. Neither had a pair, but Ivey’s final bet forced a fold and won the pot with 3-high!"
              },
              {
                title: "Tom Dwan vs Barry Greenstein – $919K Pot",
                story: "Holding just a draw, Dwan triple-barreled into a monster from Barry. With pure guts and timing, he made the legend fold the best hand, showing the new generation had arrived."
              },
              {
                title: "Daniel Negreanu Reads Viffer Like a Book",
                story: "In a weird hand full of speech play, Negreanu deduced his opponent's holding down to the exact hand. With precision and fearless table talk, he made the call and proved why he's one of the best readers of all time."
              },
              {
                title: "Vanessa Selbst’s Brutal Cooler at WSOP",
                story: "Selbst runs into one of the most heartbreaking coolers in WSOP history. The drama and shock on her face became one of the most viewed moments in poker broadcasting."
              },
              {
                title: "Scotty Nguyen’s ‘You Call It’s All Over Baby’",
                story: "In classic Scotty style, he famously said ‘You call, it's gonna be all over baby!’ before being called and winning the Main Event with top two pair. Iconic bravado."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#1a2a20] rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#ffcc53]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white opacity-90">{item.story}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 px-6" data-aos="zoom-in">
          <h3 className="text-3xl font-bold mb-4">Have a Crazy Poker Story?</h3>
          <p className="text-lg max-w-xl mx-auto mb-6">Submit your most memorable hand or experience and we might feature it here!</p>
          <Link href="/custom">
            <button className="bg-[#f2cc67] text-[#24382c] font-semibold px-8 py-4 rounded-full hover:bg-[#ffcc53] transition-all hover:scale-105">
              Submit Your Story
            </button>
          </Link>
        </section>
      </main>

      <footer className="text-center py-6 bg-[#24382c] text-[#f2cc67] text-sm">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker lovers, by poker lovers.</p>
      </footer>
    </div>
  );
}
