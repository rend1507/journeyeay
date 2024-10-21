import Link from 'next/link';

const tours = [
  { name: 'Mount Bromo Adventure', description: 'A thrilling journey to the breathtaking Mount Bromo.' },
  { name: 'Bali Beach Bliss', description: 'Relax on the beautiful shores of Bali’s beaches.' },
  { name: 'Yogyakarta Cultural Experience', description: 'Explore the rich culture of Yogyakarta.' }
];

export default function Tours() {
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
          <h1>Our Tours</h1>
          <div style={gridStyle}>
            {tours.map((tour, index) => (
              <div key={index} style={tourCard}>
                <h3>{tour.name}</h3>
                <p>{tour.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; 2024 Explore Bromo. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const gridStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px 20px'
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
