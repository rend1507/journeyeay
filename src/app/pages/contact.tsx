import Link from 'next/link';

export default function Contact() {
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
          <h1>Contact Us</h1>
          <p>Have any questions or ready to book? Contact us at:</p>
          <p>Email: info@explorebromo.com</p>
          <p>Phone: +62 812 3456 7890</p>
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
