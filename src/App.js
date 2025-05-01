import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage"; 
import DestinationResults from "./components/DestinationResults";
import HotelDetail from "./components/HotelDetail"; 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<DestinationResults />} />
        <Route path="/hotel/:id" element={<HotelDetail />} /> {/* Add route for hotel detail */}
      </Routes>
    </Router>
  );
};

export default App;
