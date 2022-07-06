import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import SpecialOffers from './SpecialOffers';
import HotelsList from './HotelsList';
import BestHotels from './BestHotels';

function Home() {
  return (
    <div className="App text-light">
      <Navbar />
      <Header />
      <SpecialOffers />
      <HotelsList />
      <BestHotels />
      <Footer />
    </div>
  );
}

export default Home;
