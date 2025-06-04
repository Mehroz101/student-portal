import React, { useState } from "react";
import "../styles/Newsletter.css";
import newsletterHero from "../assets/about.png";

const blogPosts = [
  {
    id: 1,
    title: "Convocation 2025 Announced",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "The annual convocation will be held in June 2025. All graduates are invited to register and participate in the ceremony.",
    date: "June 2025"
  },
  {
    id: 2,
    title: "New Research Lab Inaugurated",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    desc: "A state-of-the-art research lab has been inaugurated, offering new opportunities for innovation and collaboration.",
    date: "May 2025"
  },
  {
    id: 3,
    title: "Alumni Meet & Greet",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    desc: "Reconnect with fellow alumni and faculty at our annual meet and greet event. Share your experiences and network!",
    date: "April 2025"
  },
  {
    id: 4,
    title: "Scholarship Results Released",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80",
    desc: "The latest scholarship results have been released. Congratulations to all recipients for their outstanding achievements!",
    date: "March 2025"
  },
  {
    id: 5,
    title: "Faculty Development Workshop",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    desc: "Faculty members participated in a workshop focused on innovative teaching methods and technology integration.",
    date: "February 2025"
  },
  {
    id: 6,
    title: "Student Sports Gala Highlights",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "A look back at the exciting events and winners from this year’s Student Sports Gala.",
    date: "January 2025"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
];

const Newsletter = () => {
  const [search, setSearch] = useState("");
  const filteredBlogs = blogPosts.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="newsletter-page" style={{ paddingTop: "100px", minHeight: "80vh" }}>
      {/* Hero Section */}
      <section className="newsletter-hero">
        <div className="newsletter-hero-content">
          <h1>News & Letters</h1>
          <p>
            Get the latest news, updates, and newsletters from our university. Stay connected and informed about all campus activities and achievements.
          </p>
        </div>
        <div className="newsletter-hero-img">
          <img src={newsletterHero} alt="Newsletter Hero" />
        </div>
      </section>

      {/* Search Bar */}
      <div className="newsletter-search-bar">
        <input
          type="text"
          placeholder="Search news or blogs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span role="img" aria-label="search" style={{marginLeft:8, color:'#888', fontSize:'1.2rem'}}>📰</span>
      </div>

      {/* Blog Section */}
      <section className="newsletter-blog-section">
        <h2>Latest Blogs</h2>
        <div className="newsletter-blog-grid">
          {filteredBlogs.length === 0 ? (
            <div className="no-news">No blogs found.</div>
          ) : (
            filteredBlogs.map(blog => (
              <div className="newsletter-blog-card" key={blog.id}>
                <img className="newsletter-blog-img" src={blog.image} alt={blog.title} />
                <div className="newsletter-blog-body">
                  <h3 className="newsletter-blog-title">{blog.title}</h3>
                  <div className="newsletter-blog-date">{blog.date}</div>
                  <p className="newsletter-blog-desc">{blog.desc}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="newsletter-gallery-section">
        <h2>Gallery</h2>
        <div className="newsletter-gallery-grid">
          {galleryImages.map((img, idx) => (
            <img className="newsletter-gallery-img" src={img} alt={`Gallery ${idx+1}`} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
