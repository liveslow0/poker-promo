export default function Home() {
  return (
    <div style={{
      backgroundColor: '#24382c',
      color: '#f2cc67',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#ffcc53' }}>Welcome to Poker.Promo</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px' }}>
          Your trusted gateway to the best online poker platforms, beginner guides, advanced software, and stories from the felt. Whether you're just learning or grinding high stakes, Poker.Promo has something tailored for you.
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#ffcc53' }}>Top Online Poker Platforms</h2>
        <ul>
          <li>
            <a href="https://www.pokerstars.com" target="_blank" style={{ color: '#f2cc67', textDecoration: 'underline' }}>PokerStars</a> – Industry leader with massive traffic and great tournaments.
          </li>
          <li>
            <a href="https://www.ggpoker.com" target="_blank" style={{ color: '#f2cc67', textDecoration: 'underline' }}>GGPoker</a> – Fast-growing with innovative features like staking and built-in HUD.
          </li>
          <li>
            <a href="https://www.partypoker.com" target="_blank" style={{ color: '#f2cc67', textDecoration: 'underline' }}>PartyPoker</a> – Long-established with strong software and security.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#ffcc53' }}>Why Poker.Promo?</h2>
        <ul>
          <li>🎯 Curated platform recommendations for every skill level</li>
          <li>📚 Easy-to-understand poker guides and rules for beginners</li>
          <li>🛠 Access to powerful poker software to sharpen your edge</li>
          <li>🃏 True stories from real poker players around the world</li>
        </ul>
      </section>

      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#999' }}>
        <p>© {new Date().getFullYear()} Poker.Promo – Your trusted poker resource.</p>
      </footer>
    </div>
  );
}
