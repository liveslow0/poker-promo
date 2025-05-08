// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#24382c] text-[#f2cc67] font-sans">
      <header className="bg-[#24382c] p-6 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-[#ffcc53]">Poker.Promo</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-4 text-lg">
              <li><Link className="hover:text-white transition" href="/platforms">Platforms</Link></li>
              <li><Link className="hover:text-white transition" href="/about">For Beginners</Link></li>
              <li><Link className="hover:text-white transition" href="/software">Poker Software</Link></li>
              <li><Link className="hover:text-white transition" href="/stories">Poker Stories</Link></li>
              <li><Link className="hover:text-white transition" href="/custom">Custom Requests</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffcc53] mb-6">Welcome to Poker.Promo</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Your trusted guide to the best poker platforms, tools, strategies, and true player stories. Explore our site whether you're a beginner or a seasoned grinder.
          </p>
          <Link
            href="/platforms"
            className="inline-block bg-[#ffcc53] text-[#24382c] font-semibold px-6 py-3 rounded-md hover:bg-[#f2cc67] transition"
          >
            Start Exploring
          </Link>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#ffcc53] mb-3">Top Online Poker Platforms</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://www.pokerstars.com" target="_blank" className="text-[#f2cc67] underline hover:text-white">PokerStars</a> – Massive player pool, great tournaments.
            </li>
            <li>
              <a href="https://www.ggpoker.com" target="_blank" className="text-[#f2cc67] underline hover:text-white">GGPoker</a> – Modern software, built-in tools, staking system.
            </li>
            <li>
              <a href="https://www.partypoker.com" target="_blank" className="text-[#f2cc67] underline hover:text-white">PartyPoker</a> – Clean interface, secure gameplay.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#ffcc53] mb-3">Why Choose Poker.Promo?</h3>
          <ul className="space-y-1 list-disc list-inside">
            <li>🎯 Hand-picked platforms for beginners and pros</li>
            <li>📚 Clear beginner guides with no fluff</li>
            <li>🧠 Advanced software suggestions to boost your game</li>
            <li>🃏 Real poker stories that entertain and educate</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#ffcc53] mb-3">Need Personalized Help?</h3>
          <p>
            Visit our <Link href="/custom" className="underline text-[#f2cc67] hover:text-white">Custom Requests</Link> page and tell us what you need — we'll match you with the perfect poker solution.
          </p>
        </section>
      </main>

      <footer className="text-center mt-12 py-6 text-sm text-[#999]">
        <p>© {new Date().getFullYear()} Poker.Promo – Built for poker players, by poker players.</p>
      </footer>
    </div>
  );
}