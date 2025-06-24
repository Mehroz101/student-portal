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
        <h1>OUR TEAM</h1>
        <p>
  <strong>Our MERN Stack Developer Team:</strong> At the core of our digital innovation lies a passionate and skilled MERN Stack development team, responsible for building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js.
</p>
<p>
  Our developers bring modern solutions to the university's digital landscape—creating portals, alumni platforms, and real-time systems that enhance accessibility, interactivity, and performance for students, faculty, and administrators.
</p>
<ul>
  <li><strong>MongoDB:</strong> Our team utilizes MongoDB to efficiently manage and scale large volumes of academic and administrative data.</li>
  <li><strong>Express.js & Node.js:</strong> We build robust backend services and RESTful APIs to power seamless communication between the front end and the database.</li>
  <li><strong>React.js:</strong> The team leverages React to craft responsive, intuitive, and component-based user interfaces for web applications.</li>
  <li><strong>Team Collaboration:</strong> Our developers work closely with UI/UX designers, testers, and stakeholders to deliver secure and user-friendly platforms.</li>
</ul>
<p>
  Through innovation, collaboration, and continuous learning, the MERN Stack team contributes to the university’s mission of technological excellence and digital transformation.
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
