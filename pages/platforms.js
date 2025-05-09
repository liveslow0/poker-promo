// pages/platforms.js
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';

export default function Platforms() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const platforms = [
    {
      name: 'PokerStars',
      link: 'https://www.pokerstars.com',
      pros: ['Huge player base', 'Excellent tournament variety', 'Top-tier software'],
      cons: ['Higher rake', 'Tougher competition'],
      color: 'bg-[#f2cc67]',
    },
    {
      name: 'GGPoker',
      link: 'https://www.ggpoker.com',
      pros: ['Modern interface', 'Built-in staking tools', 'Lots of soft games'],
      cons: ['Mobile app limitations', 'Some countries restricted'],
      color: 'bg-[#ffcc53]',
    },
    {
      name: 'PartyPoker',
      link: 'https://www.partypoker.com',
      pros: ['Great promotions', 'Fair play commitment', 'User-friendly layout'],
      cons: ['Less traffic than major competitors'],
      color: 'bg-[#24382c] text-white',
    },
    {
      name: '888poker',
      link: 'https://www.888poker.com',
      pros: ['Recreational player-friendly', 'Low stakes', 'Freerolls available'],
      cons: ['Basic software', 'Less volume at high stakes'],
      color: 'bg-[#f2cc67]',
    },
    {
      name: 'BetOnline Poker',
      link: 'https://www.betonline.ag/poker',
      pros: ['Accepts US players', 'Crypto payments', 'Fast cashouts'],
      cons: ['Not available in all regions', 'Dated visuals'],
      color: 'bg-[#ffcc53]',
    },
    {
      name: 'WPT Global',
      link: 'https://www.wptglobal.com',
      pros: ['Innovative design', 'Tons of tournaments', 'Strong mobile experience'],
      cons: ['Still building liquidity', 'Not as many high-stakes games'],
      color: 'bg-[#24382c] text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#24382c] font-sans">
      <header
        id="nav"
        className="fixed w-full z-50 top-0 transition-all duration-300 px-6 py-4 bg-[#24382c]"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#ffcc53] font-bold text-2xl">Poker.Promo</h1>
          <nav className="space-x-6 hidden md:block">
            <Link href="/">Home</Link>
            <Link href="/about">Beginners</Link>
            <Link href="/software">Software</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/custom">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Top Online Poker Platforms
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-all duration-300 ${platform.color}`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-[#f2cc67]">
                  Visit Website ↗
                </a>
                <div className="mt-4">
                  <p className="font-semibold mb-1">Pros:</p>
                  <ul className="list-disc list-inside text-sm mb-3">
                    {platform.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                  <p className="font-semibold mb-1">Cons:</p>
                  <ul className="list-disc list-inside text-sm text-red-800">
                    {platform.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-6 bg-[#24382c] text-[#f2cc67] text-sm">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}
