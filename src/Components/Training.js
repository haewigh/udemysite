import React from 'react';
import './App.css';
import {Link} from 'react-router-dom' ;
import card_img1 from "./images/training1.jpg" ;
import card_img2 from "./images/training2.jpg" ;
import card_img3 from "./images/training3.jpg" ;
import card_img4 from "./images/training4.jpg" ;
import card_img5 from "./images/training5.jpg" ;

function Training() {
  return (
    <div>
    <div className="container-fluid training">
      <h3>Expand your career opportunities with Python</h3>
      <p>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science and machine learning. You will lear to build everything from games to sites to apps. Choose from a range of courses that will appeal to ... </p>
      <button type="button"><Link to="#">Explore Python</Link></button>
      <div className="container-fluid explore">
        <div className="row">
          <div className="card tutorial" Style="width: 13.5rem;" >
            <img src={card_img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Complete Python Bootcamp From Zero to Hero</h5>
              <small className="card-text">Jose Portilla</small>
              <div className="ratings">
                <p>4.6</p>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
                <small>(496,903)</small>
              </div>
              <p>#6,900 <span>41,900</span></p>
            </div>
          </div>
          <div className="card tutorial" Style="width: 13.5rem;">
            <img src={card_img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Automate the Boring stuff with Python Programming</h5>
              <small className="card-text">Al Steiwgart</small>
              <div className="ratings">
                <p>4.6</p>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
                <small>(496,903)</small>
              </div>
              <p>#6,900 <span>41,900</span></p>
            </div>
          </div>
          <div className="card tutorial" Style="width: 13.5rem;">
            <img src={card_img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">100 Days of Code: Complete Python Guide</h5>
              <small className="card-text">Angela Yu</small>
              <div className="ratings">
                <p>4.6</p>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
                <small>(496,903)</small>
              </div>
              <p>#6,900 <span>41,900</span></p>
            </div>
          </div>
          <div className="card tutorial" Style="width: 13.5rem;">
            <img src={card_img4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Machine Learning A-Z-AI, Python & R ChatGPT...</h5>
              <small className="card-text">Jose Portilla</small>
              <div className="ratings">
                <p>4.6</p>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
                <small>(496,903)</small>
              </div>
              <p>#6,900 <span>41,900</span></p>
            </div>
          </div>
          <div className="card tutorial" Style="width: 13.5rem">
            <img src={card_img5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Complete Python Bootcamp From Zero to Hero</h5>
              <small className="card-text">Jose Portilla</small>
              <div className="ratings">
                <p>4.6</p>
                <ul>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-half"></i></li>
                </ul>
                <small>(496,903)</small>
              </div>
              <p>#6,900 <span>41,900</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Training;