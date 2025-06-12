import React, { useState } from "react";
import "../styles/LandingPage.css";
import Asif from "../assets/Asif.jpg";
import Saad from "../assets/Saad.jpg";
import Shehraz from "../assets/Shehraz.jpg";
import Nisar from "../assets/Nisar.jpg";
import Ammar from "../assets/Ammar.jpg";
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
              <h1></h1>
              <p>
                The Muhammad Nawaz Sharif University of Engineering and
                Technology (MNSUET) is a public university located in Multan, Punjab,
                Pakistan. It was established in 2012 on the initiative of Chief
                Minister Punjab Mian Muhammad Shahbaz Sharif. The Act of
                Muhammad Nawaz Sharif University of Engineering and Technology
                Multan was approved in 2014. The university is named after Nawaz
                Sharif.
              </p>
              {/* <button
                className="read-more"
                onClick={() => navigate("/userlogin")}
              >
                Register
              </button> */}
            </div>
          </header>
        </div>
      </div>
      {/* <div className="cards1">
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
      </div> */}
      <div className="aboutus" id="about">
        <div className="aboutus_container">
          <div className="left">
            <h2>About Us</h2>
            <p>
              Professor Engr. Muhammad Kashan Basit is a dedicated academic leader with a
              profound commitment to excellence in education and research. With
              years of experience guiding students and developing innovative
              learning environments, he continues to inspire future
              professionals. His leadership fosters a culture of integrity,
              growth, and collaboration. Professor Kashan’s vision and mentorship
              play a vital role in shaping the success of this student portal
              initiative.
            </p>
            {/* <button className="read-more">Read More</button> */}
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
          <h2>286</h2>
          <p>Subjects</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">👥</span>
          <h2>1251</h2>
          <p>Students</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🧪</span>
          <h2>31</h2>
          <p>Modern Labs</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">👨‍🏫</span>
          <h2>82</h2>
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
            {/* <button className="read-more">Read More</button> */}
          </div>
          <div className="feature-card">
            <span className="icon">👩‍🏫</span>
            <h3>Expert Teachers</h3>
            <p>
              Expert teachers are reflective practitioners who continuously
              analyze and adapt their teaching strategies to enhance student
              learning outcomes.
            </p>
            {/* <button className="read-more">Read More</button> */}
          </div>
          <div className="feature-card">
            <span className="icon">💻</span>
            <h3>Online Learning</h3>
            <p>
              Muhammad Nawaz Sharif University of Engineering and Technology
              (MNS-UET) is a public university established in 2012 in Multan,
              Pakistan, offering accredited engineering and technology programs.
            </p>
            {/* <button className="read-more">Read More</button> */}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>TESTIMONIALS</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={Asif} alt="User 1" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "The university provided the perfect environment for both learning and innovation. I felt supported every step of the way."
            </p>
            <p className="testimonial-author">- Asif Ali </p>
          </div>
          <div className="testimonial-card">
            <img src={Saad} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Outstanding campus, great resources, and inspiring professors. I couldn’t have asked for more."
            </p>
            <p className="testimonial-author">- Saad Murtaza</p>
          </div>
          <div className="testimonial-card">
            <img src={Shehraz} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Studying here was a life-changing experience. The faculty genuinely cared about our growth."
            </p>
            <p className="testimonial-author">- Muhammad Shehraz</p>
          </div>
           <div className="testimonial-card">
            <img src={Nisar} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
"This university shaped my future in the best possible way. The academic and personal support was exceptional."            </p>
            <p className="testimonial-author">- Adbul Nisar</p>
          </div>
           <div className="testimonial-card">
            <img src={Ammar} alt="User 2" className="testimonial-img" />
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
             "From world-class lectures to hands-on experience, everything was top-notch. I’m proud to be an alumnus."
            </p>
            <p className="testimonial-author">- Syed Ammar Atif</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
