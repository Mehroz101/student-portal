import React, { useState } from "react";
import "../styles/Lab.css";
import labHero from "../assets/about.png";

const labCards = [
  {
    id: 1,
    title: "Physics Lab",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80",
    desc: "Explore the world of physics with hands-on experiments and modern equipment. Our Physics Lab is equipped for mechanics, optics, electricity, and more.",
    details: "Open for all engineering students. Safety equipment provided."
  },
  {
    id: 2,
    title: "Chemistry Lab",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Conduct chemical reactions and learn about compounds in a safe, supervised environment. The Chemistry Lab features fume hoods, glassware, and reagents.",
    details: "Supervised by experienced faculty. Lab coats required."
  },
  {
    id: 3,
    title: "Biology Lab",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    desc: "Study living organisms and their vital processes. The Biology Lab is equipped for microbiology, genetics, and anatomy experiments.",
    details: "Microscopes and slides available. Open for all science students."
  },
  {
    id: 4,
    title: "Computer Lab",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    desc: "Access modern computers and software for programming, simulations, and research in our state-of-the-art Computer Lab.",
    details: "High-speed internet. Open 8am-8pm."
  }
];

const blogPosts = [
  {
    id: 1,
    title: "Why Labs Matter in Engineering Education",
    date: "June 2025",
    excerpt: "Hands-on lab work bridges the gap between theory and practice, helping students develop critical thinking and technical skills.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Safety First: Best Practices in the Lab",
    date: "May 2025",
    excerpt: "Learn the essential safety protocols every student should follow to ensure a safe and productive lab experience.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  }
];

const Lab = () => {
  const [search, setSearch] = useState("");
  const filteredLabs = labCards.filter(
    (lab) =>
      lab.title.toLowerCase().includes(search.toLowerCase()) ||
      lab.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="lab-page" style={{paddingTop: "100px", minHeight: "80vh"}}>
      {/* Hero Section */}
      <section className="lab-hero">
        <div className="lab-hero-content">
          <h1>Modern Labs at MNS-UET</h1>
          <p>
            Our university offers state-of-the-art laboratories for hands-on learning, research, and innovation. Explore our labs and discover how practical experience shapes future engineers and scientists.
          </p>
        </div>
        <div className="lab-hero-img">
          <img src={labHero} alt="Lab Hero" />
        </div>
      </section>

      {/* Search Bar */}
      <div className="lab-search-bar">
        <input
          type="text"
          placeholder="Search labs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span role="img" aria-label="search" style={{marginLeft:8, color:'#888', fontSize:'1.2rem'}}>🔬</span>
      </div>

      {/* Lab Cards Section */}
      <section className="lab-cards-section">
        <h2>Our Labs</h2>
        <div className="lab-cards-grid">
          {filteredLabs.length === 0 ? (
            <div className="no-labs">No labs found.</div>
          ) : (
            filteredLabs.map(lab => (
              <div className="lab-card" key={lab.id}>
                <img className="lab-card-img" src={lab.image} alt={lab.title} />
                <div className="lab-card-body">
                  <h3 className="lab-card-title">{lab.title}</h3>
                  <p className="lab-card-desc">{lab.desc}</p>
                  <div className="lab-card-details">{lab.details}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="lab-blog-section">
        <h2>Lab Blog</h2>
        <div className="lab-blog-grid">
          {blogPosts.map(post => (
            <div className="lab-blog-card" key={post.id}>
              <img className="lab-blog-img" src={post.image} alt={post.title} />
              <div className="lab-blog-body">
                <h3 className="lab-blog-title">{post.title}</h3>
                <div className="lab-blog-date">{post.date}</div>
                <p className="lab-blog-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lab;
