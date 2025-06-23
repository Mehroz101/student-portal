import React from "react";
import "../styles/Mission.css";
import vcImg from "../assets/vc-con.jpg";

const vcValues = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    desc: "We are committed to providing a world-class education and fostering a culture of continuous learning and innovation.",
  },
  {
    icon: "🌐",
    title: "Global Vision",
    desc: "Our graduates are prepared to lead and excel in a rapidly changing, interconnected world.",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    desc: "We believe in building strong partnerships with industry, alumni, and society for mutual growth.",
  },
  {
    icon: "💡",
    title: "Innovation & Research",
    desc: "We encourage creative thinking and support research that addresses real-world challenges.",
  },
];

const Mission = () => (
  <div style={{ paddingTop: "100px", minHeight: "80vh", background: "#f8fbff" }}>
    <div className="vc-message-hero">
      <img src={vcImg} alt="Vice Chancellor" className="vc-message-img" />
      <div className="vc-message-content">
        <h1>Vice Chancellor's Message</h1>
        <h2>Prof. Dr. Muhammad Aslam, Vice Chancellor</h2>
        <p>
          Welcome to MNS UET! As Vice Chancellor, I am proud to lead an institution dedicated to academic excellence, innovation, and holistic student development. Our mission is to empower students to become leaders, innovators, and responsible citizens who contribute to society and the world.
        </p>
        <p>
          At MNS UET, we foster a vibrant learning environment, encourage research and creativity, and value diversity and inclusion. We are committed to providing opportunities for personal and professional growth, and to building strong connections with our alumni and partners.
        </p>
        <p>
          I invite you to explore our university, engage with our community, and join us in our pursuit of knowledge, discovery, and service.
        </p>
      </div>
    </div>
    <div className="vc-values">
      {vcValues.map((val, idx) => (
        <div className="vc-value-card" key={idx}>
          <div className="vc-value-icon">{val.icon}</div>
          <div className="vc-value-title">{val.title}</div>
          <div className="vc-value-desc">{val.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Mission;
