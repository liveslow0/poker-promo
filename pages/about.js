// pages/about.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';

export default function BeginnersPage() {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const games = [
    {
      name: 'Texas Hold’em',
      id: 'holdem',
      description:
        'The most popular poker variant, especially at the WSOP. Players receive two private cards and use five community cards to make the best five-card hand.',
      details: `\nRules:\n- Each player is dealt 2 hole cards.\n- Five community cards are dealt in stages: Flop (3), Turn (1), River (1).\n- Best five-card hand using any combination of hole and community cards wins.\n\nTips:\n- Play tight in early position.\n- Position is critical.\n- Bluff selectively and represent believable hands.`
    },
    {
      name: 'Omaha Hi',
      id: 'omaha',
      description:
        'Each player is dealt four hole cards. Must use exactly two of them with three community cards.',
      details: `\nRules:\n- You must use exactly 2 of your hole cards and 3 community cards.\n- Same betting rounds as Hold’em.\n\nTips:\n- Drawing hands are more common.\n- Avoid overvaluing one-pair hands.\n- Pot control is key.`
    },
    {
      name: 'Seven Card Stud',
      id: 'sevenstud',
      description:
        'No community cards. Players receive a mix of face-up and face-down cards over multiple betting rounds.',
      details: `\nRules:\n- 2 down cards, 1 up card to start.\n- Then 3 more up cards and a final down card.\n- Best 5-card hand wins.\n\nTips:\n- Remember opponents’ up cards.\n- Fold early if your hand falls behind.\n- Starting hand selection is key.`
    },
    {
      name: 'Razz',
      id: 'razz',
      description:
        'A lowball game. Best possible hand is A-2-3-4-5. Pairs and high cards are bad.',
      details: `\nRules:\n- Players receive 7 cards like in 7 Card Stud.\n- Lowest five-card hand wins.\n\nTips:\n- Avoid high cards and pairs.\n- Steal antes when showing low door cards.`
    },
    {
      name: '2-7 Lowball Triple Draw',
      id: 'lowball',
      description:
        'Draw poker game. Goal is the lowest hand, straights and flushes count against you.',
      details: `\nRules:\n- You get 5 cards and can draw three times.\n- Best hand: 7-5-4-3-2 (not suited).\n\nTips:\n- Discard high cards.\n- Watch opponents’ draw patterns.\n- Don’t break strong low hands.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#24382c] text-white font-sans">
      <header className="fixed w-full z-50 top-0 px-6 py-4 bg-[#24382c] shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-[#ffcc53] font-bold text-2xl">Poker for Beginners</h1>
          <nav className="space-x-6 hidden md:block">
            <Link href="/" className="hover:text-[#f2cc67] transition">Home</Link>
            <Link href="/platforms" className="hover:text-[#f2cc67] transition">Platforms</Link>
          </nav>
        </div>
      </header>

      <main className="pt-28 px-6 pb-20">
        <section data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Learn to Play the Games of Champions</h2>
          <p className="text-lg max-w-2xl mx-auto text-[#f2cc67]">
            Here’s a beginner-friendly breakdown of poker games played at the World Series of Poker (WSOP).
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-[#1a2a20] p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedGame(game)}
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-[#ffcc53] mb-2">{game.name}</h3>
              <p className="text-sm text-white opacity-80">{game.description}</p>
            </div>
          ))}
        </section>

        {selectedGame && (
          <section
            className="mt-16 max-w-4xl mx-auto bg-white text-[#24382c] p-8 rounded-xl shadow-xl"
            data-aos="zoom-in"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedGame.name} — How It Works</h3>
              <button
                className="text-sm text-red-600 hover:underline"
                onClick={() => setSelectedGame(null)}
              >
                Close
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">{selectedGame.details}</pre>
          </section>
        )}
      </main>
    </div>
  );
}
