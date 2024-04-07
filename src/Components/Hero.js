import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;
import carousel1 from "./images/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" ;
import carousel2 from "./images/10ca89f6-811b-400e-983b-32c5cd76725a.jpg" ;

function Hero() {
  return (
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" d-flex justify-content-center text-left>
          <img src= {carousel1} className="d-block w-100" alt="" />
          <div className="hero-content">
            <h1>Learning that gets you</h1>
            <p>Skills for your present and your future. Get started with us.</p>
          </div>
        </div>
        <div className="carousel-item" d-flex justify-content-center text-left >
          <img src={carousel2} className="d-block w-100" alt="..." />
            <div className="hero-content">
              <h1>Skills that drive you forward</h1>
              <p>Technology and the world of work change fast- with us, you're faster. Get the shills to achieve goals and stay competitive.</p>
              <Link to="#">Plan for organizations</Link>
            </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Hero;