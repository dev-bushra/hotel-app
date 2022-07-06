import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import '../style/index.css';

const BestHotels = () => {

  useEffect(() => {
    AOS.init({
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }, []);

  const img1 = 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  const img2 = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  const img3 = 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  const img4 = 'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  const img5 = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  return (
    <div className="best-hotels ">
        <h1 class="text-light text-center mt-5 py-3"><span class="text-primary">BEST</span> Places  </h1>

      <main class="container">
        <section class="card" data-aos="fade-right">
          <img src={img1} alt="" />
          <div>
            <h3>Royal Kings Hotel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
              enim laudantium.
            </p>
            <a href="#" class="btn">Book Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img src={img2} alt="" />
          <div>
            <h3>Bushra Hotel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
              enim laudantium.
            </p>
            <a href="#" class="btn">Book Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-right">
          <img src={img3} alt="" />
          <div>
            <h3>Wooho Hotel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
              enim laudantium.
            </p>
            <a href="#" class="btn">Book Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img src={img4} alt="" />
          <div>
            <h3>King Mohammed Hotel Four</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
              enim laudantium.
            </p>
            <a href="#" class="btn">Book Now</a>
          </div>
        </section>

        <section class="card" data-aos="fade-right">
          <img src={img5} alt="" />
          <div>
            <h3>Acrylic Painting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
              enim laudantium.
            </p>
            <a href="#" class="btn">Book Now</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BestHotels;