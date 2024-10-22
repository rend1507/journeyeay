"use client"
import styles from "./page.module.css"; // Import custom styles
import {useEffect} from 'react';

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
      <section id={styles.jumbotron}>
        <div id={styles.tagline}>
          <div className={styles.dynamic} id="tagline-dynamic">Trip a Day</div>
          <div className={styles.still}>with Journeyeay</div>
        </div>
      </section>

      <div className={(styles.main, styles.container)}>
        <section className={styles.intro}>
          <h2>Explore Breathtaking Destinations</h2>
          <p>
            At Journeyeay, we specialize in providing unique travel experiences
            tailored just for you. Whether you're looking for a thrilling
            adventure or a relaxing getaway, we have something for everyone!
          </p>
        </section>

        <section className={styles.services}>
          <h2>Our Services</h2>
          <ul>
            <li>Private Tours</li>
            <li>Group Adventures</li>
            <li>Customized Travel Packages</li>
            <li>Expert Travel Guides</li>
          </ul>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Start Your Journey?</h2>
          <p>Contact us today to plan your next adventure!</p>
          <button className={styles.button}>Get Started</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
