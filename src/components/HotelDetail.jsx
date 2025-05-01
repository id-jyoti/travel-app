import React from 'react';
import { useParams } from 'react-router-dom';

// Mocked data for hotel details
const hotelData = [
  { id: 1, name: 'Hotel One', description: 'A luxurious hotel with a great view', price: 200, images: ['hotel1.jpeg', 'hotel1_2.jpeg'], location: 'New York, USA' },
  { id: 2, name: 'Hotel Two', description: 'A modern hotel with excellent facilities', price: 150, images: ['hotel2.jpeg', 'hotel2_2.jpeg'], location: 'Paris, France' },
  { id: 3, name: 'Hotel Three', description: 'A cozy hotel located in the heart of the city', price: 120, images: ['hotel3.jpeg', 'hotel3_2.jpeg'], location: 'Kyoto, Japan' },
  { id: 4, name: 'Hotel Four', description: 'A budget-friendly hotel with great service', price: 80, images: ['hotel4.jpeg', 'hotel4_2.jpeg'], location: 'London, UK' },
];

const HotelDetail = () => {
  const { hotelId } = useParams(); 
  const hotel = hotelData.find((hotel) => hotel.id === parseInt(hotelId)); 

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-detail">
      <h1>{hotel.name}</h1>

      {/* Image Carousel */}
      <div className="carousel">
        {hotel.images.map((image, index) => (
          <img
            key={index}
            src={`../assets/images/${image}`}
            alt={`${hotel.name} view ${index + 1}`}
            className="hotel-image"
          />
        ))}
      </div>

      <p>{hotel.description}</p>
      <p>Price: ${hotel.price} per night</p>

      {/* Availability Calendar */}
      <div className="calendar">
        <h3>Availability</h3>
        <p>Choose your check-in and check-out dates:</p>
        <input type="date" />
        <input type="date" />
      </div>

      {/* Location Map */}
      <div className="location-map">
        <h3>Location</h3>
        <p>{hotel.location}</p>
        {/* Placeholder for a map */}
        <div className="map-placeholder">[Map Placeholder]</div>
      </div>

      <div className="hotel-amenities">
        <h3>Amenities:</h3>
        <ul>
          <li>Free WiFi</li>
          <li>Swimming Pool</li>
          <li>24/7 Room Service</li>
          <li>Fitness Center</li>
        </ul>
      </div>

      <div className="booking-cta">
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default HotelDetail;
