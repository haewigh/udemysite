import React from 'react';
import './App.css';
import brand1 from "./images/volkswagen.svg" ;
import brand2 from "./images/samsung.svg";
import brand3 from "./images/cisco.svg";
import brand4 from "./images/att.svg";
import brand5 from "./images/citi.svg";
import brand6 from "./images/ericsson.svg"
import brand7 from "./images/hewlett_packard_enterprise.svg"
import brand8 from "./images/procter_gamble.svg"

function Customer() {
  return (
    <div>
    <div className="container-fluid customers">
      <p>Trusted by over 15,000 companies and millions of learners around the world</p>
      <div className="company">
        <ul>
          <li><img src={brand1} alt="" /></li>
          <li><img src={brand2} alt="" /></li>
          <li><img src={brand3} alt="" /></li>
          <li><img src={brand4} alt="" /></li>
          <li><img src={brand5} alt="" /></li>
          <li><img src={brand6} alt="" /></li>
          <li><img src={brand7} alt="" /></li>
          <li><img src={brand8} alt="" /></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Customer;