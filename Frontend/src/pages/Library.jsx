import React, { useState } from 'react';
import '../styles/Library.css';
import cle from '../assets/cle.jpg';
import marcom from '../assets/marcom.jpg';
import hon from '../assets/hon.jpg';
import ir  from '../assets/ir.jpg';
import musk from '../assets/musk.jpg';
import social from '../assets/social.jpg';
import junior from '../assets/junior.jpg';
import datasci from '../assets/datasci.jpg';

const booksData = [
  {
    id: 1,
    title: 'CLE Summer Internship Program',
    cover: cle,
    desc: 'A classic Center for Language Engineering is a research lab conducting research and development in linguistic and computational aspects of languages, specifically of Pakistan and developing Asia. of the Roaring Twenties, exploring themes of wealth, love, and the American Dream.',
    link: 'jobs.cle@kics.edu.pk',
  },
  {
    id: 2,
    title: 'NUST Marketing & Communications invites ',
    cover: marcom,
    desc: 'Familiarise yourself with the fundamentals, gain hands-on experience, and avail the opportunity to work alongside dynamic professionals.',
    link: 'https://lnkd.in/dCbE4nvE ',
  },
  {
    id: 3,
    title: 'Pakistan Internship Program 2025',
    cover: hon,
    desc: 'A Applications are now LIVE for the FrieslandCampina Engro Pakistan Internship Program 2025! novel that delves into the dangers of totalitarianism and extreme political ideology.',
    link: 'https://lnkd.in/dX3jE4y4 ',
  },
  {
    id: 4,
    title: '🌟 Special Internship Program for Fresh Graduates! 🎓',
    cover: ir,
    desc: 'IR Solutions is thrilled to launch itsMonth Internship Program Leading to Job designed for fresh graduates eager to dive into real world challenges and thrive in a professional, tech-driven environment. 🚀Here’s your chance to learn, contribute, and secure a full-time job based on your performance! 🙌',
    link: 'www.irsolutions.tech',
  },
  {
    id: 5,
    title: '🌟 Ready to Launch Your Career?',
    cover: musk,
    desc: 'The wait is over! 🚀 Our Internship Program 2025 is officially open — and it’s designed for the bold, the curious, and the career-driven. If you re a student or a fresh graduate looking to turn potential into progress, this is your moment.',
    link: 'https://lnkd.in/d4VP8utk',
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    cover: social,
    desc: 'About the Role Join us as a Content Creator Intern to ideate, research, and craft engaging content for digital platforms. Ideal for students who are creative, passionate about storytelling, and eager to gain real-world experience in content, branding, and digital media.',
    link: 'https://lnkd.in/ddn7SVWz ',
  },
  {
    id: 7,
    title: 'Junior Software Developer (C# / ERP Systems)',
    cover: junior,
    desc: 'We are looking for a motivated and passionate Junior Software Developer with strong fundamentals in Object-Oriented Programming (OOP) and C# to join our growing development team. This is a full-time opportunity ideal for fresh graduates who are eager to begin their careers in software development, particularly in the field of ERP solutions and business process automation.',
    link: 'https://www.glassdoor.com/Job/pakistan-computer-science-internship-jobs-SRCH_IL.0,8_IN192_KO9,36.htm',
  },
  {
    id: 8,
    title: 'Data Scientist Internship',
    cover: datasci,
    desc: 'Devfum leverages a specialized blend of web technologies, artificial intelligence (AI), and extended reality (XR) solutions to automate business processes, enhance customer experiences, and drive sustainable growth for businesses worldwide.',
    link: 'https://www.glassdoor.com/Job/pakistan-computer-science-internship-jobs-SRCH_IL.0,8_IN192_KO9,36.htm',
  },
];

const Library = () => {
  const [search, setSearch] = useState('');

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container" style={{paddingTop:"100px",minHeight:"80vh"}}>
      <div className="library-search-bar">
        <input
          type="text"
          placeholder="Search books by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span role="img" aria-label="search" style={{marginLeft:8, color:'#888', fontSize:'1.2rem'}}>🔍</span>
      </div>
      <div className="library-books-grid">
        {filteredBooks.length === 0 ? (
          <div style={{gridColumn:'1/-1', textAlign:'center', color:'#888', fontSize:'1.1rem', padding:'40px 0'}}>No books found.</div>
        ) : (
          filteredBooks.map(book => (
            <div className="book-card" key={book.id}>
              <img className="book-cover" src={book.cover} alt={book.title} />
              <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-desc">{book.desc}</div>
                <a
                  className="download-btn"
                  href={book.link.startsWith('http') ? book.link : `https://${book.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Library;