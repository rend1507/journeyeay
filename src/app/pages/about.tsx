import Link from 'next/link';

export default function About() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>About Us</h1>
          <p>Explore Bromo is your trusted partner in adventure. We specialize in curated travel experiences across Indonesia, ensuring unforgettable memories for each traveler.</p>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2024 Explore Bromo. All rights reserved.</p>
      </footer>
    </div>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#222',
  color: '#fff'
};
