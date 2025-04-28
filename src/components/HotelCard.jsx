import React from "react";
import "./HotelCard.css";

export default function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.thumbnail} alt={hotel.name} className="hotel-thumbnail" />
      <div className="hotel-details">
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-rating">⭐ {hotel.rating} | {hotel.reviews} reviews</p>
        <p className="hotel-amenities">{hotel.amenities.join(", ")}</p>
        <p className="hotel-description">{hotel.description}</p>
        <div className="hotel-bottom">
          <span className="hotel-price">${hotel.price}/night</span>
          <button className="hotel-button">View</button>
        </div>
      </div>
    </div>
  );
}
