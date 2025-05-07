import React from "react";
import "../styles/LandingPage.css";
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import aboutImg from "../assets/about.png";
const LandingPage = () => {
  return (
    // <div className="university-home">
    //   {/* Hero Section */}
    //   <div className="hero-section-container" id="hero">
    //     <section className="hero-section">
    //       <div className="hero-text">
    //         <h1>Welcome to Future University</h1>
    //         <p>Empowering Students, Shaping the Future.</p>
    //         <button>Explore Programs</button>
    //       </div>
    //       <div className="hero-image">
    //         <img src={bannerImg} alt="University" />
    //       </div>
    //     </section>
    //   </div>

    //   {/* Stats Section */}
    //   <div className="stats-section-container">
    //     <section className="stats-section">
    //       <div className="stats-left">
    //         <h2>Our Achievements</h2>
    //         <p>
    //           We’re proud of our vibrant student community and academic
    //           excellence.
    //         </p>
    //       </div>
    //       <div className="stats-right">
    //         <div className="stat-box">
    //           <h3>2000+</h3>
    //           <p>Active Students</p>
    //         </div>
    //         <div className="stat-box">
    //           <h3>120+</h3>
    //           <p>Programs</p>
    //         </div>
    //         <div className="stat-box">
    //           <h3>15</h3>
    //           <p>Departments</p>
    //         </div>
    //       </div>
    //     </section>
    //   </div>

    //   {/* About Section */}
    //   <div className="about-section-container">
    //     <section className="about-section" id="about">
    //       <div className="about-image">
    //         <img src={aboutImg} alt="About Us" />
    //       </div>
    //       <div className="about-text">
    //         <h2>About Our University</h2>
    //         <p>
    //           Future University is committed to academic excellence and
    //           innovation. Our mission is to develop future leaders who will
    //           impact the world positively.
    //         </p>
    //       </div>
    //     </section>
    //   </div>
    //   <div className="testimonials-section-container">
    //     {/* Testimonials */}
    //     <section className="testimonials-section">
    //       <h2>What Our Students Say</h2>
    //       <div className="testimonial-card">
    //         <p>
    //           "This university has provided me with the skills and confidence I
    //           need to thrive."
    //         </p>
    //         <strong>- Sarah Ali, Computer Science</strong>
    //       </div>
    //       <div className="testimonial-card">
    //         <p>"A great learning environment with supportive faculty."</p>
    //         <strong>- Ahmed Khan, Business Administration</strong>
    //       </div>
    //     </section>
    //   </div>
    //   {/* Events Section */}
    //   <div className="events-section-container">
    //     <section className="events-section">
    //       <h2>Upcoming Events</h2>
    //       <div className="events-grid">
    //         <div className="event-card">
    //           <h3>Convocation Ceremony</h3>
    //           <p>Date: June 10</p>
    //           <p>Celebrate the graduating class of 2025 with us.</p>
    //         </div>
    //         <div className="event-card">
    //           <h3>Summer Internship Fair</h3>
    //           <p>Date: July 15</p>
    //           <p>Meet top companies and secure internships.</p>
    //         </div>
    //         <div className="event-card">
    //           <h3>Open House</h3>
    //           <p>Date: August 5</p>
    //           <p>Visit the campus and connect with faculty & students.</p>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   <div className="programs-section-container">
    //     {/* Explore Programs */}
    //     <section className="programs-section" id="programs">
    //       <h2>Explore Our Programs</h2>
    //       <div className="programs-grid">
    //         <div className="program-card">BSc Computer Science</div>
    //         <div className="program-card">BBA - Business Administration</div>
    //         <div className="program-card">BA Media Sciences</div>
    //         <div className="program-card">BS Artificial Intelligence</div>
    //         <div className="program-card">Bachelor of Education</div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
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
              <button className="read-more">Register</button>
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
    </div>
  );
};

export default LandingPage;
