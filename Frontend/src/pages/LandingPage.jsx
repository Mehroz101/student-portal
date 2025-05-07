import React, { useState } from "react";
import "../styles/LandingPage.css";
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import aboutImg from "../assets/about.png";
import PopupForm from "../components/PopupForm";
const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false)
  return (
   
    <div className="homepage">
      <div className="container">
        <div className="overlay">
          <header className="header">
            <div className="header-content">
              <h1>Alumni Hub for Students</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                amet error eius reiciendis eum sint unde eveniet deserunt est
                debitis corporis temporibus recusandae accusamus.
              </p>
              <button className="read-more" onClick={openPopup}>Register</button>
            </div>
          </header>
        </div>
      </div>
      <div className="cards">
        <div className="card blue">
          <span className="icon">📚</span>
          <h3>Learn Online</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima
            officiis deleniti dolor exercitationem praesentium, est!
          </p>
        </div>
        <div className="card green">
          <span className="icon">👩‍🏫</span>
          <h3>Expert Teachers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima
            officiis deleniti dolor exercitationem praesentium, est!
          </p>
        </div>
        <div className="card blue">
          <span className="icon">🏫</span>
          <h3>Best Classrooms</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima
            officiis deleniti dolor exercitationem praesentium, est!
          </p>
        </div>
      </div>
      <div className="aboutus" id="about">
        <div className="aboutus_container">
          <div className="left">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              amet error eius reiciendis eum sint unde eveniet deserunt est
              debitis corporis temporibus recusandae accusamus.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="right">
            <div className="image">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
        
          <div className="stats">
            <div className="stat-item">
              <span className="stat-icon">📚</span>
              <h2>568</h2>
              <p>Subjects</p>
            </div>
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <h2>3500</h2>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🧪</span>
              <h2>65</h2>
              <p>Modern Labs</p>
            </div>
            <div className="stat-item">
              <span className="stat-icon">👨‍🏫</span>
              <h2>250</h2>
              <p>Teachers</p>
            </div>
        </div>
        <section className="features" id="events">
            <h2>Upcoming Events</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod, saepe reprehenderit totam aliquam architecto fugit sunt animi!</p>
            <div className="feature-cards">
              <div className="feature-card">
                <span className="icon">📚</span>
                <h3>Professional Courses</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natu eum.</p>
                <button className="read-more">Read More</button>
              </div>
              <div className="feature-card">
                <span className="icon">👩‍🏫</span>
                <h3>Expert Teachers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natu eum.</p>
                <button className="read-more">Read More</button>
              </div>
              <div className="feature-card">
                <span className="icon">💻</span>
                <h3>Online Learning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natu eum.</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <h2>TESTIMONIALS</h2>
            <div className="testimonial-cards">
              <div className="testimonial-card">
                <img src={std1} alt="User 1" className="testimonial-img" />
                <div className="stars">★★★★☆</div>
                <p className="testimonial-text">Great courses and amazing support! Highly recommend to everyone.</p>
                <p className="testimonial-author">- John Doe</p>
              </div>
              <div className="testimonial-card">
                <img src={std2} alt="User 2" className="testimonial-img" />
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">The best learning experience I’ve ever had. Excellent teachers!</p>
                <p className="testimonial-author">- Jane Smith</p>
              </div>
            </div>
          </section>
          <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default LandingPage;
