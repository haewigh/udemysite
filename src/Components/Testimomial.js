import React from 'react';
import './App.css';
import play_icon from "./images/play-50.png" ;

function Testimonial() {
  return (
    <div>
    <div className="container-fluid testimonials">
      <h2>How learners like you are achieving their goals</h2>
      <div className="row">
        <div className="col testy">
          <h2>"</h2>
          <p>I am proud to say that after a few months of taking this course...<strong>I passed my exam and am now an AWS Certified Cloud Practitioner!</strong>This content was exactly what the CCP exam covered.</p>
          <div className="avatar-icon">
            <div className="avatar">
              <p>WA</p>
            </div>
            <p className="name">Will A</p>
          </div>
          <hr />
          <div className="play">
            <img src={play_icon} width="30px" height="30px" alt="" />
            <p>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
          </div>
        </div>
        <div className="col testy">
          <h2>"</h2>
          <p>This course helped me <strong>freshen up on my product manager skills and I land a job Facebook!</strong> Thanks guys.</p>
          <div className="avatar-icon">
            <div className="avatar">
              <p>RF</p>
            </div>
            <p className="name">Ron F</p>
          </div>
          <hr />
          <div className="play">
            <img src={play_icon} width="30px" height="30px" alt="" />
            <p>Become a Product Manager | Learn the skills and get the job</p>
          </div>
        </div>
        <div className="col testy">
          <h2>"</h2>
          <p>I am proud to say that after a few months of taking this course...<strong> I passed my exam and am now an AWS Certified Cloud Practitioner!</strong>This content was exactly what the CCP exam covered.</p>
          <div className="avatar-icon">
            <div className="avatar">
              <p>WA</p>
            </div>
            <p className="name">Will A</p>
          </div>
          <hr />
          <div className="play">
            <img src={play_icon} width="30px" height="30px" alt="" />
            <p>Leadership: Practical Leadership Skills</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;