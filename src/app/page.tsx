"use client";
import { useEffect } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMapLocationDot,
  faPersonHiking,
  faCalendarCheck,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

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
    const bannerImages = [
      "/images/banner/banner-1.jpg",
      "/images/banner/banner-2.jpg",
      "/images/banner/banner-3.jpg",
      "/images/banner/banner-4.jpg",
      "/images/banner/banner-5.jpg",
    ];
    let currentIndex = 0;
    let currentIndexImg = 0;
    const animationSec = 1000;

    const changeText = () => {
      $("#tagline-dynamic").fadeOut(animationSec, function () {
        currentIndex = (currentIndex + 1) % texts.length;
        $(this).text(texts[currentIndex]).fadeIn(0);
      });
      $("#jumbotron").show(animationSec, function () {
        currentIndexImg = (currentIndexImg + 1) % bannerImages.length;
        $(this)
          .css("background-image", "url(" + bannerImages[currentIndexImg] + ")")
          .show(animationSec);
      });
    };

    const intervalId = setInterval(changeText, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-100">
      <section id="jumbotron">
        <div id="tagline">
          <div id="tagline-dynamic">Trip a Day</div>
          <div id="tagline-static">
            with{" "}
            <Image
              className="inline"
              src="/images/icon/text-landscape-bw-1.png" // Path to your logo image
              alt="Journeyeay Logo"
              width={150} // Fixed width
              height={150}
              priority // Set the priority to preload the image
            />
          </div>
        </div>
      </section>

      <section id="about" className="container">
        <p className="section-title">Estabilished on 2022</p>
        <p>
          At Journeyeay, we are more than just a travel agency—we are your
          gateway to unforgettable adventures. Based in the heart of Malang, we
          specialize in curated trips to explore the majestic beauty of Bromo
          and beyond. Whether you&apos;re seeking a <b>Private Trip</b> for an
          intimate getaway, an Open Trip to meet fellow travelers, or a{" "}
          <b>Group Trip</b> for larger adventures, we&apos;ve got you covered.
        </p>
        <p className="mt-3">
          As a <b>trusted provider</b>, we pride ourselves on delivering
          personalized travel experiences that cater to your needs. We take care
          of the details, so you can focus on making memories. Whether
          you&apos;re an adventurer, a nature lover, or simply someone looking
          for a peaceful retreat, Journeyeay! ensures every moment of your
          journey is exciting, fun, and hassle-free. Join us and discover why so
          many travelers trust Journey Yeay! to turn their travel dreams into
          reality.
        </p>
      </section>

      <section id="services">
        <div className="overlay">
          <div className="container">
            <p className="section-title mb-8">Notable Experience</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="item">
                <Image
                  src={"/images/banner/services/item-1.jpg"}
                  alt="Journeyeay - Private Tours"
                  layout="fill" // required
                  className="item-bg"
                />
                <div className="item-content">
                  <div className="item-overlay">
                    <div
                      className="item-accent"
                      style={{ backgroundColor: "rgb(var(--red-rgb))" }}
                    ></div>
                  </div>
                  <div className="item-text">Private Tours</div>
                </div>
              </div>
              <div className="item">
                <Image
                  src={"/images/banner/services/item-2.jpg"}
                  alt="Journeyeay - Group Adventures"
                  layout="fill" // required
                  className="item-bg"
                />
                <div className="item-content">
                  <div className="item-overlay">
                    <div
                      className="item-accent"
                      style={{ backgroundColor: "rgb(var(--mint-rgb))" }}
                    ></div>
                  </div>
                  <div className="item-text">Groups Adventures</div>
                </div>
              </div>
              <div className="item">
                <Image
                  src={"/images/banner/services/item-3.jpg"}
                  alt="Journeyeay - Customized Travel Packages"
                  layout="fill" // required
                  className="item-bg"
                />
                <div className="item-content">
                  <div className="item-overlay">
                    <div
                      className="item-accent"
                      style={{ backgroundColor: "rgb(var(--violet-rgb))" }}
                    ></div>
                  </div>
                  <div className="item-text">Customized Travel Packages</div>
                </div>
              </div>
              <div className="item">
                <Image
                  src={"/images/banner/services/item-4.jpg"}
                  alt="Journeyeay - Expert Travel Guides"
                  layout="fill" // required
                  className="item-bg"
                />
                <div className="item-content">
                  <div className="item-overlay">
                    <div
                      className="item-accent"
                      style={{ backgroundColor: "rgb(var(--orange-rgb))" }}
                    ></div>
                  </div>
                  <div className="item-text">Expert Travel Guides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <p className="section-title mb-4">Discover the Difference</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            <WhyComponent
              icon={faMapLocationDot}
              title="Crafted Just for You"
              description="Your trip, your vibe! We’re all about personalizing every adventure. Want a solo trek, a chill family vacay, or a wild group getaway? We’ll hook you up with a trip that’s 100% your style!"
            />
            <WhyComponent
              icon={faPersonHiking}
              title="Local Legends as Your Guides"
              description="Your trip, your vibe! We’re all about personalizing every adventure. Want a solo trek, a chill family vacay, or a wild group getaway? We’ll hook you up with a trip that’s 100% your style!"
            />
            <WhyComponent
              icon={faCalendarCheck}
              title="Trips Your Way, Any Day"
              description="Solo adventure? Squad goals? We’ve got you! With flexible private, open, and group trips, your travel plans are never boxed in. Wherever you want to roll, we’ll make it happen."
            />
            <WhyComponent
              icon={faWind}
              title="Easy-Peasy Booking & Support"
              description="Booking made breezy! From our no-stress booking to on-the-go support, we’re here to make your trip a breeze. Sit back, relax, and get ready for all the epic memories."
            />
          </div>
        </div>
      </section>

      <section id="cta">
        <h2>Book Now with Ease!</h2>
        <p>Contact us today to plan your next adventure!</p>
        <button className="button">Get Started</button>
      </section>
    </div>
  );
};

type WhyComponentProps = {
  title: string;
  description: string;
  icon?: IconProp;
};

const WhyComponent: React.FC<WhyComponentProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="item">
      <div className="icon">
        {icon && <FontAwesomeIcon icon={icon} className="fa-4x" />}
        {/* Render the icon if it exists */}
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default HomePage;
