import React from "react";
import "../styles/team.css";

const newsItems = [
  {
    date: "March 2024",
    title: "MNS UET Launches New Research Center",
    desc: "The university inaugurated a state-of-the-art research center focused on renewable energy and sustainable technologies, attracting national attention.",
  },
  {
    date: "December 2023",
    title: "Alumni Achieve Global Recognition",
    desc: "Several MNS UET alumni were recognized for their contributions in international engineering competitions and conferences.",
  },
  {
    date: "September 2023",
    title: "Industry Partnership Program Expanded",
    desc: "MNS UET signed new MoUs with leading tech companies to provide students with hands-on training and internship opportunities.",
  },
  {
    date: "June 2023",
    title: "Annual Tech Fest Draws Record Participation",
    desc: "The university's annual technology festival saw record participation from students, faculty, and industry experts, showcasing innovative projects.",
  },
];

const History = () => (
  <div style={{ paddingTop: "100px", minHeight: "80vh", background: "#f8fbff" }}>
    <div className="team-hero" style={{ boxShadow: '0 4px 32px #1976d222', borderRadius: 24, background: 'linear-gradient(120deg, #f8fbff 0%, #e3f0ff 100%)' }}>
      <div className="team-hero-content" style={{ width: '100%' }}>
        <h1>History of MNS UET</h1>
        <p>
          Muhammad Nawaz Sharif University of Engineering & Technology (MNS UET), Multan, was established in 2012 to address the growing need for quality engineering education in South Punjab. The university began with a vision to create a center of excellence in engineering, technology, and applied sciences.
        </p>
        <p>
          <strong>Traditional Roots:</strong> MNS UET is built on the rich cultural and educational heritage of Multan, a city known for its tradition, learning, and innovation. The university blends modern engineering education with the values and traditions of the region, fostering a unique environment for growth and discovery.
        </p>
        <p>
          <strong>Milestones:</strong>
        </p>
        <ul>
          <li>2012: Foundation stone laid and first academic session launched</li>
          <li>2014: Inauguration of state-of-the-art laboratories and research centers</li>
          <li>2016: First convocation and graduation of pioneer batch</li>
          <li>2018: Expansion of academic programs and industry partnerships</li>
          <li>2022: Recognition as a leading engineering university in South Punjab</li>
        </ul>
        <p>
          Over the years, MNS UET has grown into a vibrant academic community, attracting talented students and faculty from across the country. The university is committed to upholding its traditions while embracing innovation and progress.
        </p>
        <p>
          Today, MNS UET stands as a symbol of progress, tradition, and innovation, preparing graduates to contribute to the nation and the world.
        </p>
      </div>
    </div>
    <div style={{ maxWidth: 1100, margin: '48px auto 0 auto', padding: 24 }}>
      <h2 style={{ color: '#1976d2', fontWeight: 700, marginBottom: 18 }}>Latest News & Achievements</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        {newsItems.map((item, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #1976d211', padding: 24, minWidth: 260, maxWidth: 340, flex: '1 1 260px', marginBottom: 12 }}>
            <div style={{ color: '#1976d2', fontWeight: 600, marginBottom: 6 }}>{item.date}</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{item.title}</div>
            <div style={{ color: '#444', fontSize: '1rem' }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default History;
