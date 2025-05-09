// pages/stories.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const storiesData = [
  {
    title: "Phil Ivey’s $1M Bluff vs Paul Jackson",
    summary: "A bluff war with no pair that ended in a legendary 3-high win.",
    details:
      "In one of the most iconic moments of high-stakes poker, Phil Ivey and Paul Jackson engaged in an intense series of re-raises while holding absolutely nothing. Each tried to out-bluff the other, but in the end, Ivey's final bet pushed Jackson off his hand, and Ivey scooped the pot with just 3-high. The hand is now studied for its psychological warfare and fearlessness."
  },
  {
    title: "Tom Dwan vs Barry Greenstein – $919K Pot",
    summary: "Dwan fires all streets with a draw and makes a legend fold.",
    details:
      "Tom 'durrrr' Dwan built his reputation on aggression, and this hand was a prime example. Facing Barry Greenstein, who flopped top pair, Dwan bet all three streets with just a straight draw. His final shove for nearly $500,000 forced Greenstein to lay down the best hand. The clip went viral and cemented Dwan's reputation as fearless and sharp."
  },
  {
    title: "Daniel Negreanu Reads Viffer Like a Book",
    summary: "Negreanu calls down with third pair and nails Viffer’s hand exactly.",
    details:
      "During a televised cash game, Daniel Negreanu and Viffer got into a weird and talkative hand. Viffer kept chatting and raising, but Negreanu kept up the banter, analyzing aloud. Ultimately, Daniel called with a weak pair and immediately said Viffer had queen-ten. He was dead right. The crowd (and Viffer) were stunned at his psychic read."
  },
  {
    title: "Vanessa Selbst’s Brutal Cooler at WSOP",
    summary: "Selbst flops a full house but runs into quads in a $100K event.",
    details:
      "During a $100K WSOP High Roller, Selbst had pocket aces and flopped aces full. Her opponent, Gaelle Baumann, had pocket eights and hit quad eights. The money went in, and the table gasped as the cards flipped. Vanessa couldn’t believe it and walked off in shock. The clip became one of the most viewed poker coolers of all time."
  },
  {
    title: "Scotty Nguyen’s ‘You Call It’s All Over Baby’",
    summary: "Scotty wins the WSOP Main Event with a bold prediction.",
    details:
      "Scotty Nguyen, known for his charisma and catchphrases, was heads-up in the WSOP Main Event. On the final hand, he told his opponent, 'You call, it’s gonna be all over, baby.' The opponent called, Scotty tabled top two pair, and it was indeed all over. The quote became etched in poker history forever."
  },
  {
    title: "Chris Moneymaker’s Bluff of the Century",
    summary: "Amateur Moneymaker bluffs pro Farha in 2003 Main Event.",
    details:
      "In 2003, Chris Moneymaker bluffed Sammy Farha off a better hand on the biggest stage in poker. With just king high, Moneymaker fired the river in a three-bet pot. Farha tanked for minutes before folding. The hand shocked the world and sparked the online poker boom that followed."
  }
];

export default function Stories() {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#24382c] text-white font-sans">
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

      <main className="pt-28 px-6">
        <section className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-[#f2cc67] mb-12">Legendary Poker Stories</h2>

          <div className="space-y-6">
            {storiesData.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#1a2a20] rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#ffcc53]">{item.title}</h3>
                <p className="text-sm opacity-90">
                  {expanded === index ? item.details : item.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

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
