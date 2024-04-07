import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;

function Cta() {
  return (
    <div>
    <div className="container-fluid cta">
      <h2>A broad selection of courses</h2>
      <p>Choose from over 210,000 online video couses with new additions published every month</p>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="#">Python</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Excel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Web development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Javascript</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Data science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Amazon AWS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Drawing</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Cta;
