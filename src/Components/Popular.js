import React from 'react';
import './App.css';
import training3 from "./images/training3.jpg" ;
import training6 from "./images/training6.png" ;
import training7 from "./images/training7.jpg" ;
import training8 from "./images/training8.jpg" ;
import python from "./images/python-image.jpg";

function Popular() {
  return (
    <div>
      <div className="container-fluid popular">
      <h2>Learners are viewing</h2>
      <div className="container-fluid explore">
        <div className="row">
          <div className="card tutorial" Style="width: 13.5rem;">
            <img src={training6} className="card-img-top" alt="..." />
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
            <img src={training7} className="card-img-top" alt="..." />
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
              <p>6,900 <span>41,900</span></p>
            </div>
          </div>
          <div className="card tutorial" Style="width: 13.5rem;">
            <img src={training8} className="card-img-top" alt="..." />
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
            <img src={training3} className="card-img-top" alt="..." />
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
          <div className="card tutorial" Style="width: 13.5rem">
            <img src={python} className="card-img-top" alt="..." />
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

export default Popular;