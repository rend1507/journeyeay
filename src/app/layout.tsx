import "./globals.css"; // Import your global styles
import { FC, ReactNode } from "react";
import Header from "./components/Header"; // Import the Header
import Footer from "./components/Footer"; // Import the Footer
import Script from "next/script";

import localFont from "next/font/local";

const roboto = localFont({
  src: "./fonts/Roboto/Roboto-Regular.ttf",

  variable: "--font-roboto",
  weight: "100 500",
});
const robotoBold = localFont({
  src: "./fonts/Roboto/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "600",
});
const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const oswald = localFont({
  src: "./fonts/Oswald/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  weight: "100 900",
});

export const metadata = {
  title: "Journey Yeay",
  description:
    "Destination within your way, tour and travel that save your day",
  icons: {
    icon: "/images/icon/icon-square-1.png", // Specify the path to your favicon
    priority: false,
  },
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
 

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/icon/icon-square-1.png"
          type="image/png"
        />
        {/* Link to your favicon */}
      </head>
      <body
        className={`${roboto.variable} ${robotoBold.variable} ${oswald.variable} ${poppins.variable} antialiased`}
      >
        <Header /> {/* Display Header on all pages */}
        <main>{children}</main> {/* Render the page content */}
        <Footer /> {/* Display Footer on all pages */}
      </body>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="lazyOnload"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
      ></Script>
      <Script src="/script/script.js"></Script>
    </html>
  );
};

export default RootLayout;
