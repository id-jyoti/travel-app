import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./Homepage.css";

import Tokyo from "./assets/images/tokyo.avif";
import Paris from "./assets/images/paris.jpg";
import Kyoto from "./assets/images/kyoto.jpg";
import London from "./assets/images/london.webp";

const destinations = [
  { name: "Tokyo", image: "./assets/images/tokyo.avif" },
  { name: "Paris", image: "./assets/images/paris.webp" },
  { name: "Kyoto", image: "./assets/images/kyoto.jpg" },
  { name: "london", image: "./assets/images/london.webp" },
];

const promotions = [
  {
    title: "Spring Deals",
    description: "Up to 40% off hotels this season!",
    image: "/images/spring.jpg",
  },
  {
    title: "Members Only",
    description: "Exclusive rates for members only.",
    image: "/images/members.jpg",
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

const DestinationCard = ({ name, image }) => (
  <Card className="destination-card">
    <img src={image} alt={name} className="destination-image" />
    <CardContent>
      <h3 className="destination-name">{name}</h3>
    </CardContent>
  </Card>
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

export default function HomePage() {
  return (
    <div className="homepage-container">
      <HeroBanner />

      <section className="section">
        <h2 className="section-title">Top Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Promotions</h2>
        <div className="promotions-grid">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </section>
    </div>
  );
}
