"use client"
import {useEffect} from 'react';
import Image from "next/image";


const HomePage = () => {
   useEffect(() => {
     const texts = [
       "Brighten your Day",
       "Find your Way",
       "Travel Each Day",
       "Plan the stay",
       "Keep it slay",
       "Escape today",
       "Getaway",
     ];
     let currentIndex = 0;

     const changeText = () => {
       $("#tagline-dynamic").fadeOut(700, function () {
         currentIndex = (currentIndex + 1) % texts.length;
         $(this).text(texts[currentIndex]).fadeIn(0);
       });
     };

     const intervalId = setInterval(changeText, 2000);

     // Clean up interval on component unmount
     return () => clearInterval(intervalId);
   }, []);
  return (
    <div>
      <section id="jumbotron">
        <div id="tagline">
          <div id="tagline-dynamic">Trip a Day</div>
          <div id="tagline-static">
            with{" "}
            <Image
              className="inline"
              src="/images/icon/text-landscape-2.png" // Path to your logo image
              alt="Journeyeay Logo"
              width={150} // Fixed width
              height={150}
              priority // Set the priority to preload the image
            />
          </div>
        </div>
      </section>

      <div className="container">
        <section className="intor">
          <h2>Explore Breathtaking Destinations</h2>
          <p>
            At Journeyeay, we specialize in providing unique travel experiences
            tailored just for you. Whether you're looking for a thrilling
            adventure or a relaxing getaway, we have something for everyone!
          </p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Private Tours</li>
            <li>Group Adventures</li>
            <li>Customized Travel Packages</li>
            <li>Expert Travel Guides</li>
          </ul>
        </section>

        <section id="cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Contact us today to plan your next adventure!</p>
          <button className="btton">Get Started</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
