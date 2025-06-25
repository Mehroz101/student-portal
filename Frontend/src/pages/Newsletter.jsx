import React, { useState } from "react";
import "../styles/Newsletter.css";
import newsletterHero from "../assets/about.png";
import img1 from "../assets/bannerImg.png";
import img2 from "../assets/datasci.jpg";
import img3 from "../assets/Honhaar.jpg";
import img4 from "../assets/ir.jpg";
import junior from "../assets/junior.jpg";
import hon from "../assets/hon.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Convocation 2025 Announced",
    image: junior,
    desc: "The annual convocation will be held in June 2025. All graduates are invited to register and participate in the ceremony.",
    date: "June 2025"
  },
  {
    id: 2,
    title: "New Research Lab Inaugurated",
    image: hon ,
    desc: "A state-of-the-art research lab has been inaugurated, offering new opportunities for innovation and collaboration.",
    date: "May 2025"
  },
  {
    id: 3,
    title: "Alumni Meet & Greet",
    image: img3,
    desc: "Reconnect with fellow alumni and faculty at our annual meet and greet event. Share your experiences and network!",
    date: "April 2025"
  },
  {
    id: 4,
    title: "Scholarship Results Released",
    image: img4,
    desc: "The latest scholarship results have been released. Congratulations to all recipients for their outstanding achievements!",
    date: "March 2025"
  },
  {
    id: 5,
    title: "Faculty Development Workshop",
    image: img1,
    desc: "Faculty members participated in a workshop focused on innovative teaching methods and technology integration.",
    date: "February 2025"
  },
  {
    id: 6,
    title: "Student Sports Gala Highlights",
    image: img2,
    desc: "A look back at the exciting events and winners from this year’s Student Sports Gala.",
    date: "January 2025"
  }
];

const galleryImages = [img1, img2, img3, img4];

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
      {/* <section className="newsletter-hero">
        <div className="newsletter-hero-content">
          <h1>News & Letters</h1>
          <p>
            Get the latest news, updates, and newsletters from our university. Stay connected and informed about all campus activities and achievements.
          </p>
        </div>
        <div className="newsletter-hero-img">
          <img src={newsletterHero} alt="Newsletter Hero" />
        </div>
      </section> */}

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
        <h2>News Letter</h2>
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
      {/* <section className="newsletter-gallery-section">
        <h2>Gallery</h2>
        <div className="newsletter-gallery-grid">
          {galleryImages.map((img, idx) => (
            <img className="newsletter-gallery-img" src={img} alt={`Gallery ${idx+1}`} key={idx} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Newsletter;
