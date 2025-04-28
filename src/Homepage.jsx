import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./Homepage.css";
import SearchBox from "./components/SearchBox";

import spring from "./assets/images/spring.jpg";
import members from "./assets/images/members.jpg";

const destinations = [
  { name: "Tokyo", image: require("./assets/images/tokyo.avif") },
  { name: "Paris", image: require("./assets/images/paris.webp") },
  { name: "Kyoto", image: require("./assets/images/kyoto.jpg") },
  { name: "London", image: require("./assets/images/london.webp") },
];

const promotions = [
  {
    title: "Spring Deals",
    description: "Up to 40% off hotels this season!",
    image: spring,
  },
  {
    title: "Members Only",
    description: "Exclusive rates for members only.",
    image: members,
  },
];

const HeroBanner = () => (
  <div className="hero-banner">
    <div className="hero-content">
      <h1 className="hero-title">Discover Your Next Adventure</h1>
      <p className="hero-subtitle">Book hotels and experiences with great deals</p>
      <Button className="hero-button">Start Exploring</Button>
    </div>
  </div>
);

const PromotionCard = ({ title, description, image }) => (
  <Card className="promotion-card">
    <img src={image} alt={title} className="promotion-image" />
    <CardContent className="promotion-content">
      <h4 className="promotion-title">{title}</h4>
      <p className="promotion-description">{description}</p>
    </CardContent>
  </Card>
);

const DestinationCard = ({ name, image }) => (
  <Card className="destination-card">
    <img src={image} alt={name} className="destination-image" />
    <CardContent>
      <h3 className="destination-name">{name}</h3>
    </CardContent>
  </Card>
);

const SearchByArea = () => (
  <section className="section search-area">
    <h2 className="section-title">Search by Area</h2>
    <input 
      type="text" 
      placeholder="Enter a city, region, or country" 
      className="search-input"
    />
    <Button className="search-button">Search</Button>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Travel Explorer. All rights reserved.</p>
  </footer>
);

export default function HomePage() {
  return (
    <div className="homepage-container">
      <HeroBanner />
      <SearchBox />
      <section className="section">
        <h2 className="section-title">Promotions</h2>
        <div className="promotions-grid">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Top Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </section>

      <SearchByArea />
      <Footer />
    </div>
  );
}
