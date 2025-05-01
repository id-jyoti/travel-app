import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    console.log("Search:", { destination, checkInDate, checkOutDate, adults, children, rooms });
    //  trigger filtering mocked results here later
  };

  return (
    <div className="search-box">
      <h2>Find Your Stay</h2>
      <div className="search-fields">
        <div className="search-field">
          <label>Destination</label>
          <input 
            type="text" 
            placeholder="Where are you going?" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="search-field">
          <label>Check-in</label>
          <input 
            type="date" 
            value={checkInDate} 
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        <div className="search-field">
          <label>Check-out</label>
          <input 
            type="date" 
            value={checkOutDate} 
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        <div className="search-field">
          <label>Adults</label>
          <select value={adults} onChange={(e) => setAdults(e.target.value)}>
            {[...Array(10).keys()].map(n => <option key={n+1} value={n+1}>{n+1}</option>)}
          </select>
        </div>

        <div className="search-field">
          <label>Children</label>
          <select value={children} onChange={(e) => setChildren(e.target.value)}>
            {[...Array(6).keys()].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div className="search-field">
          <label>Rooms</label>
          <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
            {[...Array(5).keys()].map(n => <option key={n+1} value={n+1}>{n+1}</option>)}
          </select>
        </div>

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

