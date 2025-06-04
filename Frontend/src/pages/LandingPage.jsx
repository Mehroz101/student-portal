import React, { useState } from "react";
import "../styles/LandingPage.css";
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import std3 from "../assets/std3.jpg";
import aboutImg from "../assets/about.png";
import PopupForm from "../components/PopupForm";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="homepage">
      <div className="container">
        <div className="overlay">
          <header className="header">
            <div className="header-content">
              <h1>Alumni Hub for Students</h1>
              <p>
                The Muhammad Nawaz Sharif University of Engineering and
                Technology (MNSUET) (Urdu: جامعہ محمد نواز شریف ہندسیہ و
                تکنیکیہ) is a public university located in Multan, Punjab,
                Pakistan. It was established in 2012 on the initiative of Chief
                Minister Punjab Mian Muhammad Shahbaz Sharif. The Act of
                Muhammad Nawaz Sharif University of Engineering and Technology
                Multan was approved in 2014. The university is named after Nawaz
                Sharif.
              </p>
              <button
                className="read-more"
                onClick={() => navigate("/userlogin")}
              >
                Register
              </button>
            </div>
          </header>
        </div>
      </div>
      <div className="cards1">
        <div className="card blue">
          <span className="icon">📚</span>
          <h3>Learn Online</h3>
          <p>
            Muhammad Nawaz Sharif University of Engineering and Technology
            (MNS-UET) is a public university established in 2012 in Multan,
            Pakistan, offering accredited engineering and technology programs.
          </p>
        </div>
        <div className="card green">
          <span className="icon">👩‍🏫</span>
          <h3>Expert Teachers</h3>
          <p>
            Expert teachers are reflective practitioners who continuously
            analyze and adapt their teaching strategies to enhance student
            learning outcomes.
          </p>
        </div>
        <div className="card blue">
          <span className="icon">🏫</span>
          <h3>Best Classrooms</h3>
          <p>
            A well-designed classroom fosters student engagement and learning by
            incorporating flexible layouts, personalized elements, and a
            positive atmosphere.
          </p>
        </div>
      </div>
      <div className="aboutus" id="about">
        <div className="aboutus_container">
          <div className="left">
            <h2>About Us</h2>
            <p>
              Professor Kashan Basit is a dedicated academic leader with a
              profound commitment to excellence in education and research. With
              years of experience guiding students and developing innovative
              learning environments, he continues to inspire future
              professionals. His leadership fosters a culture of integrity,
              growth, and collaboration. Professor Basit’s vision and mentorship
              play a vital role in shaping the success of this student portal
              initiative.
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
        <h2>Features</h2>
        <p>
          The <b>MNS-UET alumni</b> website serves as a dynamic platform for
          graduates to connect, offering features such as success stories,
          departmental achievements, and updates on alumni activities. It
          fosters a strong sense of community by highlighting notable
          accomplishments and facilitating ongoing engagement with the
          university.
        </p>
        <div className="feature-cards">
          <div className="feature-card">
            <span className="icon">📚</span>
            <h3>Professional Courses</h3>
            <p>
              MNS-UET Multan offers a range of short professional courses
              designed to enhance practical skills and industry readiness. These
              include programs in Web Design & Development, Python Fundamentals,
              and Referencing using EndNote, catering to both students and
              professionals seeking to expand their expertise.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="feature-card">
            <span className="icon">👩‍🏫</span>
            <h3>Expert Teachers</h3>
            <p>
              Expert teachers are reflective practitioners who continuously
              analyze and adapt their teaching strategies to enhance student
              learning outcomes.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="feature-card">
            <span className="icon">💻</span>
            <h3>Online Learning</h3>
            <p>
              Muhammad Nawaz Sharif University of Engineering and Technology
              (MNS-UET) is a public university established in 2012 in Multan,
              Pakistan, offering accredited engineering and technology programs.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>TESTIMONIALS</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={std1} alt="User 1" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              Great courses and amazing support! Highly recommend to everyone.
            </p>
            <p className="testimonial-author">- Saad Murtaza</p>
          </div>
          <div className="testimonial-card">
            <img src={std2} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              The best learning experience I’ve ever had. Excellent teachers!
            </p>
            <p className="testimonial-author">- Asif Ali</p>
          </div>
          <div className="testimonial-card">
            <img src={std3} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              The best learning experience I’ve ever had. Excellent teachers!
            </p>
            <p className="testimonial-author">- Muhammad Shehraz</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
