import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;
import design from "./images/category-design-2x-v2.jpg" ;
import development from "./images/category-development-2x-v2.jpg" ;
import marketing from "./images/category-marketing-2x-v2.jpg" ;
import business from "./images/lohp-category-business-2x-v2.jpg" ;
import software from "./images/lohp-category-it-and-software-2x-v2.jpg" ;
import music from "./images/lohp-category-music-2x-v2.jpg" ;
import personal from "./images/lohp-category-personal-development-2x-v2.jpg" ;
import photo from "./images/lohp-category-photography-2x-v2.jpg" ;


function Categories() {
  return (
    <div>
    <div className="container categories">
      <h2>Top Categories</h2>
      <div className="cat-images">
        <ul>
          <li>
            <Link to="">
              <img src={design} alt="" />
            </Link>
            <p>Design</p>
          </li>
          <li>
            <Link to="">
              <img src={development} alt="" />
            </Link>
            <p>Development</p>
          </li>
          <li>
            <Link to="/">
              <img src={marketing} alt="" />
            </Link>
            <p>Marketing</p>
          </li>
          <li>
            <Link to="">
              <img src={business} alt="" />
            </Link>
            <p>Business</p>
          </li>
          <li>
            <Link to="">
              <img src={software} alt="" />
            </Link>
            <p>IT and Software</p>
          </li>
          <li>
            <Link to="">
              <img src={music} alt="" / >
            </Link>
            <p>Music</p>
          </li>
          <li>
            <Link to="">
              <img src={personal} alt="" />
            </Link>
            <p>Personal development</p>
          </li>
          <li>
            <Link to="">
              <img src={photo} alt="" />
            </Link>
            <p>Photography</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Categories;