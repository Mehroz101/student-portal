import React from "react";
import "../styles/Mission.css";
import vcImg from "../assets/vc-con.png";

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
        <h2>Prof. Dr. Engr. Tahir Sultan Vice Chancellor</h2>
        <p>
It gives me great pleasure to share a few words about the journey and vision of Muhammad Nawaz Sharif University of Engineering and Technology (MNS-UET), Multan. As we step forward in an era shaped by the Sustainable Development Goals (SDGs), our university remains committed to nurturing human values, academic excellence, and meaningful research anchored in ethics and social responsibility.

Engineers today are more than technical professionals; they are innovators, problem-solvers, and nation-builders. At MNS-UET, we believe in empowering our students to contribute positively to fields vital for Pakistan’s progress, such as smart infrastructure, digital transformation, environmental sustainability, energy efficiency, and healthcare technologies.

        </p>
        <p>
Although we are a relatively young institution, MNS-UET is rapidly evolving into a center of excellence, particularly for the people of South Punjab. The development of our modern campus with advanced labs, learning spaces, a central library, and student facilities reflects our character, thrive together.

Our faculty is actively engaged in high-quality research and scholarly activities, and we are continuously working to strengthen our graduate programs to meet international standards. We also place great emphasis on forging strong connections between academia and industry, ensuring our graduates are well-prepared to take on real-world challenges with confidence and skill.        </p>
        <p>
I invite you, students, researchers, industry partners, and the broader community to join us in this journey of growth, service, and transformation.        </p>
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
