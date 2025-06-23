import React from "react";
import "../styles/team.css";
import aboutImg from "../assets/about.png";

const Team = () => (
  <div style={{ paddingTop: "100px", minHeight: "80vh", background: "#f8fbff" }}>
    <div className="team-hero">
      <img src={aboutImg} alt="About MNS UET" className="team-hero-bg" />
      <div className="team-hero-content">
        <h1>About MNS UET</h1>
        <p>
          Muhammad Nawaz Sharif University of Engineering & Technology (MNS UET), Multan, is a premier institution dedicated to excellence in engineering, technology, and applied sciences. Established to meet the growing demand for quality technical education in South Punjab, MNS UET is committed to nurturing future leaders, innovators, and professionals.
        </p>
        <p>
          <strong>Vision:</strong> To be a world-class university recognized for academic excellence, cutting-edge research, and societal impact.
        </p>
        <p>
          <strong>Mission:</strong> To provide transformative education, foster innovation, and promote ethical values, preparing graduates to excel in a globalized world.
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul>
            <li>State-of-the-art laboratories and research centers</li>
            <li>Highly qualified faculty and industry experts</li>
            <li>Strong focus on entrepreneurship and innovation</li>
            <li>Vibrant student life with clubs, societies, and events</li>
            <li>Active alumni network and industry partnerships</li>
            <li>Commitment to community service and sustainable development</li>
          </ul>
        </p>
        <p>
          At MNS UET, we believe in holistic development, hands-on learning, and strong industry connections. Our faculty, staff, and mentors are committed to supporting every student's journey from classroom to career.
        </p>
      </div>
    </div>
  </div>
);

export default Team;
