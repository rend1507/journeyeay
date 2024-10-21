import Link from 'next/link';

export default function Home() {
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
        {/* Hero Section */}
        <section style={heroStyle}>
          <h1>Explore the World with Us!</h1>
          <p>Your adventure begins here. Discover stunning destinations and create unforgettable memories.</p>
          <button><Link href="/tours">Explore Tours</Link></button>
        </section>

        {/* Featured Tours */}
        <section style={sectionStyle}>
          <h2>Popular Tours</h2>
          <div style={gridStyle}>
            <div style={tourCard}>
              <h3>Bromo Adventure</h3>
              <p>Explore the breathtaking views of Mount Bromo on this unforgettable journey.</p>
            </div>
            <div style={tourCard}>
              <h3>Bali Beaches</h3>
              <p>Discover the serene beauty of Bali's world-famous beaches.</p>
            </div>
            <div style={tourCard}>
              <h3>Yogyakarta Culture</h3>
              <p>Dive into the rich culture and history of Yogyakarta.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2024 Explore Bromo. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles (Inline for simplicity)
const heroStyle = {
  padding: '100px 20px',
  textAlign: 'center',
  backgroundColor: '#f0f0f0'
};

const sectionStyle = {
  padding: '50px 20px',
  textAlign: 'center'
};

const gridStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const tourCard = {
  width: '30%',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px'
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#222',
  color: '#fff'
};
