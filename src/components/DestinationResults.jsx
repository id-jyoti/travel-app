import React, { useState } from 'react';

// Mocked data for hotel listings
const hotels = [
  { name: 'Hotel One', rating: 4.5, price: 200, image: 'hotel1.jpeg' },
  { name: 'Hotel Two', rating: 3.8, price: 150, image: 'hotel2.jpeg' },
  { name: 'Hotel Three', rating: 4.2, price: 120, image: 'hotel3.jpeg' },
  { name: 'Hotel Four', rating: 3.5, price: 80, image: 'hotel4.jpeg' },
];

const DestinationResults = () => {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [minRating, setMinRating] = useState(0);

  const filteredHotels = hotels.filter(hotel => 
    hotel.price >= priceRange[0] && hotel.price <= priceRange[1] && hotel.rating >= minRating
  );

  return (
    <div className="destination-results">
      <h2>Hotel Listings</h2>

      {/* Price Filter */}
      <div className="filter">
        <h3>Price Range</h3>
        <input 
          type="range" 
          min="0" 
          max="300" 
          value={priceRange[0]} 
          onChange={(e) => setPriceRange([e.target.value, priceRange[1]])} 
        />
        <input 
          type="range" 
          min="0" 
          max="300" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])} 
        />
        <p>${priceRange[0]} - ${priceRange[1]}</p>
      </div>

      {/* Rating Filter */}
      <div className="filter">
        <h3>Minimum Rating</h3>
        <input 
          type="number" 
          min="0" 
          max="5" 
          value={minRating} 
          onChange={(e) => setMinRating(Number(e.target.value))} 
        />
        <p>{minRating} Stars and above</p>
      </div>

      {/* Display filtered hotels */}
      <div className="hotel-cards">
        {filteredHotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={`../assets/images/${hotel.image}`} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>Rating: {hotel.rating}</p>
            <p>Price: ${hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationResults;

