import React, { useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HotelsDetails from './components/HotelsDetails';
import About from './components/About';
import AOS from 'aos';
// data-aos="fade-left"
// import '../style/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  });


  return (
    <div className="App text-light" >
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details" element={<HotelsDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
