import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;
import logo from './images/logo-udemy.svg' ;
import globe1 from "./images/globe.png";

function Menu() {
  return (
    <div>
      <header id="main-header">
    <Link to="/" id="logo"><img src={logo} alt="" width="90px" /></Link>
    <nav id="nav1">
      <ul>
        <li><Link to="/">Categories</Link></li>
        <li>
          <form action="">
            <button type="submit">🔍</button>
            <input type="search" name="" id="" placeholder="Search anything"
            faria-label="Search" />
          </form>
        </li>
        <li><Link to="/">Udemy Business</Link></li>
        <li><Link to="/">Teach on Udemy</Link></li>
        <li><Link to="/"><img src="./images/cart.png" alt="" width="20px" /></Link></li>
      </ul>
    </nav>
    <div id="btn1-list">
      <ul>
        <li className="btn1"><button>Log in</button></li>
        <li className="btn1"><button>Sign up</button></li>
        <li>
          <button to="/"><img src={globe1} alt="" width="20px" /></button>
        </li>
      </ul>
    </div>
    <Link to="#side-drawer" className="btn-menu">
      <span></span>
      <span></span>
      <span></span>
    </Link>
  </header>
  <aside id="side-drawer">
    <header>
      <Link to="index.html" className="btn-menu">
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </header>
    <nav>
      <ul>
        <li><Link to="/">Categories</Link></li>
        <li><Link to="/">Udemy Business</Link></li>
        <li><Link to="/">Teach on Udemy</Link></li>
        <li><Link to="/"><img src="./images/cart.png" alt="" width="20px" /></Link></li>
      </ul>
    </nav>
  </aside>
    </div>
  );
}

export default Menu;
