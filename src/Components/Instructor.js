import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;
import tutor from "./images/instructor-2x-v3.jpg" ;

function Instructor() {
  return (
    <div>
    <div className="instructor">
      <div className="tutor-image">
        <img src={tutor} width="400px" alt="" />
      </div>
      <div className="tutor-text">
        <h3>Become an instructor</h3>
        <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
        <Link to="#">Start teaching today</Link>
      </div>
    </div>
    </div>
  );
}

export default Instructor;

