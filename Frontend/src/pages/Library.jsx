import React, { useState } from 'react';
import '../styles/Library.css';

const booksData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    desc: 'A classic novel of the Roaring Twenties, exploring themes of wealth, love, and the American Dream.',
    download: 'https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    desc: 'A powerful story about racial injustice and childhood innocence in the Deep South.',
    download: 'https://www.pdfdrive.com/download.pdf?id=15755411&h=6e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e&u=cache&ext=pdf'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    desc: 'A dystopian novel that delves into the dangers of totalitarianism and extreme political ideology.',
    download: 'https://www.planetebook.com/free-ebooks/1984.pdf'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    desc: 'A romantic novel that also critiques the British landed gentry at the end of the 18th century.',
    download: 'https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf'
  },
  {
    id: 5,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    desc: 'A fantasy adventure that sets the stage for the epic Lord of the Rings trilogy.',
    download: 'https://www.pdfdrive.com/download.pdf?id=15755411&h=6e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e&u=cache&ext=pdf'
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: 'https://covers.openlibrary.org/b/id/8231996-L.jpg',
    desc: 'A coming-of-age novel that explores teenage angst and alienation.',
    download: 'https://www.pdfdrive.com/download.pdf?id=15755411&h=6e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e&u=cache&ext=pdf'
  },
];

const Library = () => {
  const [search, setSearch] = useState('');

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container" style={{paddingTop:"100px",minHeight:"80vh"}}>
      <div className="library-search-bar">
        <input
          type="text"
          placeholder="Search books by title or author..."
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
                <div className="book-author">by {book.author}</div>
                <div className="book-desc">{book.desc}</div>
                <a className="download-btn" href={book.download} target="_blank" rel="noopener noreferrer" download>
                  Download PDF
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