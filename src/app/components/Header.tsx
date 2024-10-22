import Image from "next/image";
import Link from "next/link";


import { FC } from "react";

const Header: FC = () => {
  return (
    <header id="header">
      <div className="container">
        <Image
          src="/images/icon/text-landscape-1.png" // Path to your logo image
          alt="Journeyeay Logo"
          width={150} // Fixed width
          height={200}
          priority // Set the priority to preload the image
        />
        <nav className="w-full">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tours">Tours</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
