import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo2 from "./images/logo-udemy2.svg"

function Footer() {
  return (
    <div>
      <footer>
<div className="footer-first">
  <div className="top-table">
    <div className="finish">
      <ul>
        <li><Link to="#">Udemy Business</Link></li>
        <li><Link to="#">Teach on Udemy</Link></li>
        <li><Link to="#">Get the app</Link></li>
        <li><Link to="#">About us</Link></li>
        <li><Link to="#">Contact us</Link></li>
      </ul>
    </div>
    <div className="finish">
      <ul>
        <li><Link to="#">Careers</Link></li>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="#">Help and Support</Link></li>
        <li><Link to="#">Affiliate</Link></li>
        <li><Link to="#">Investors</Link></li>
      </ul>
    </div>
    <div className="finish">
      <ul>
        <li><Link to="#">Terms</Link></li>
        <li><Link to="#">Privacy Policy</Link></li>
        <li><Link to="#">Cookies settings</Link></li>
        <li><Link to="#">Sitemap</Link></li>
        <li><Link to="#">Accessibity statement</Link></li>
      </ul>
    </div>
  </div>
  <button>
    <p>English</p>
  </button>
</div>
<div className="footer-second">
  <div className="footerlogo">
    <img src={logo2} width="90px" alt="" />
  </div>
  <p className="ft">&copy; 2024 udemy </p>
</div>
</footer>
    </div>
  );
}

export default Footer;