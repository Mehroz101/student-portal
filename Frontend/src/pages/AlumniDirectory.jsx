import "../styles/AlumniDirectory.css";
import React from "react";
import Usman from "../assets/Usman.jpg";
import imtinan from "../assets/imtinan.jpg";
import wakeel from "../assets/wakeel.jpg";
import sohail from "../assets/sohail.jpg";
import nadeem from "../assets/nadeem.jpg";
import Abuzar from "../assets/Abuzar.jpg";
import Asifg from "../assets/Asifg.jpg";
import Shehraz from "../assets/Shehraz.jpg";
import Saad from "../assets/Saad.jpg";
import Nisar from "../assets/Nisar.jpg";
import Ammar from "../assets/Ammar.jpg";
import fraz from "../assets/fraz.jpg";
import ubaid from "../assets/ubaid.jpg";
import hanan from "../assets/hanan.jpg";
import wajaht from "../assets/wajaht.jpg";
 

const alumniData = [
  {
    id: 1,
    name: "Usman Maqbool ",
    image: Usman,
    graduationYear: "2018",
    profession: "Freelancer",
    location: "Multan, Pakistan",
    about: "Usman Maqbool is a freelancer and community leader, currently working at Google. He loves mentoring students and contributing to open source.",
  },
  {
    id: 2,
    name: "Rao Imtinan",
    image: imtinan,
    graduationYear: "2019",
    profession: "Associate Software Engineer, Techverx",
    location: "Lahore, Pakistan",
    about: "Rao Imtinan specializes in smart grid solutions and has led multiple international projects. He is an active alumni ambassador.",
  },
  {
    id: 3,
    name: "Muhammad Wakeel",
    image: wakeel,
    graduationYear: "2019",
    profession: "Artificial Intelligence Researcher, MIT",
    location: "Karachi, Pakistan",
    about: "Muhammad Wakeel is pursuing his PhD at MIT and has published several papers in robotics and AI. He volunteers for STEM outreach.",
  },
  {
    id: 4,
    name: "Muhammad Sohail Ahmad",
    image: sohail,
    graduationYear: "2020",
    profession: "Flutter Developer, PutITCode",
    location: "Faisalabad, Pakistan",
    about: "Muhammad Sohail Ahmad has worked on major infrastructure projects in Pakistan and is a guest lecturer at his alma mater.",
  },
  {
    id: 5,
    name: "Muhammad Nadeem",
    image: nadeem,
    graduationYear: "2020",
    profession: "Internee",
    location: "Islamabad, Pakistan",
    about: "Muhammad Nadeem is an expert in process optimization and safety. He is a frequent speaker at international engineering conferences.",
  },
  {
    id: 6,
    name: "Muhammad Abuzar",
    image: Abuzar,
    graduationYear: "2020",
    profession: "full stack Software developer currently employed ",
    location: "Multan, Pakistan",
    about: "Muhammad Abuzar co-founded a successful tech startup and is passionate about innovation in the local tech ecosystem.",
  },
  {
    id: 7,
    name: "Asif Ali",
    image: Asifg,
    graduationYear: "2021",
    profession: "Data Scientist, Facebook",
    location: "Islamabad, Pakistan",
    about: "Asif leads a team of data scientists and is an advocate for women in STEM.",
  },
  {
    id: 8,
    name: "Syed Ammar Atif",
    image: Ammar,
    graduationYear: "2021",
    profession: "MonogoDB Developer, Database",
    location: "Doha , Qatar",
    about: "Syed Ammar Atif has managed large-scale construction projects across the Middle East.",
  },
  {
    id: 9,
    name: "Muhammad fraz",
    image: fraz,
    graduationYear: "2021",
    profession: "Team Lead / Data Operator at Nexis",
    location: "Islamabad, Pakistan",
    about: "Muhammad Fraz is a respected academic and has published research in renewable energy.",
  },
  {
    id: 10,
    name: "Ubaidullah Tanveer",
    image: ubaid,
    graduationYear: "2022",
    profession: "internee",
    location: "Sahiwal, Pakistan",
    about: "Ubaidullah Tanveer specializes in sustainable architecture and green building design.",
  },
  {
    id: 11,
    name: "Muhammad Shehraz",
    image: Shehraz,
    graduationYear: "2021",
    profession: "UI/UX Designer",
    location: "Islamabad, Pakistan",
    about: "Muhammad Shehraz is known for his leadership in corporate HR and employee wellness programs.",
  },
  {
    id: 12,
    name: "Saad Murtaza",
    image: Saad,
    graduationYear: "2021",
    profession: "MERN Stack Developer, Atrule",
    location: "Multan, Pakistan",
    about: "Saad founded an agri-tech company that helps farmers increase crop yields.",
  },
  {
    id: 13,
    name: "Abdul Nisar",
    image: Nisar,
    graduationYear: "2021",
    profession: "Frontend Developer",
    location: "Toronto, Canada",
    about: "Abdul advises Fortune 500 companies on digital transformation.",
  },
  {
    id: 14,
    name: "Abdul Hanan",
    image: hanan,
    graduationYear: "2021",
    profession: "Director, Engro Corp",
    location: "Karachi, Pakistan",
    about: "Abdul Hanan is a director at Engro and a mentor for young professionals.",
  },
  {
    id: 15,
    name: "Syed Muhammad Wajahat Haider Naqvi",
    image: wajaht,
    graduationYear: "2022",
    profession: "Chief Scientist, CERN",
    location: "Multan, Pakistan",
    about: "Syed Muhammad Wajahat Haider Naqvi leads a research team at CERN and is a pioneer in particle physics.",
  },
  // Add more alumni as needed
];

const AlumniDirectory = () => {
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState({
    location: "",
    profession: "",
    graduationYear: ""
  });

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(search.toLowerCase()) ||
      alumni.graduationYear.toLowerCase().includes(search.toLowerCase()) ||
      alumni.profession.toLowerCase().includes(search.toLowerCase()) ||
      alumni.location.toLowerCase().includes(search.toLowerCase()) ||
      alumni.about.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = filters.location === "" || alumni.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesProfession = filters.profession === "" || alumni.profession.toLowerCase().includes(filters.profession.toLowerCase());
    const matchesYear = filters.graduationYear === "" || alumni.graduationYear === filters.graduationYear;
    return matchesSearch && matchesLocation && matchesProfession && matchesYear;
  });

  // Get unique values for dropdowns
  const uniqueLocations = Array.from(new Set(alumniData.map(a => a.location)));
  const uniqueProfessions = Array.from(new Set(alumniData.map(a => a.profession)));
  const uniqueYears = Array.from(new Set(alumniData.map(a => a.graduationYear)));

  return (
    <div className="alumni-directory-container" style={{ paddingTop: "140px", minHeight: "80vh" }}>
      <div style={{ maxWidth: 900, margin: '0 auto 32px auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search alumni by name, year, profession, location..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: 260, padding: '10px 14px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
          
        />
        <span role="img" aria-label="search" style={{ fontSize: '1.3rem', color: '#2563eb' }}>🔍</span>
        <select value={filters.location} onChange={e => setFilters(f => ({ ...f, location: e.target.value }))} style={{ width: 180, padding: '10px 8px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '1rem' }}>
          <option value="">All Locations</option>
          {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        <select value={filters.profession} onChange={e => setFilters(f => ({ ...f, profession: e.target.value }))} style={{ width: 200, padding: '10px 8px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '1rem' }}>
          <option value="">All Professions</option>
          {uniqueProfessions.map(prof => <option key={prof} value={prof}>{prof}</option>)}
        </select>
        <select value={filters.graduationYear} onChange={e => setFilters(f => ({ ...f, graduationYear: e.target.value }))} style={{ width: 140, padding: '10px 8px', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '1rem' }}>
          <option value="">All Years</option>
          {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
        
      </div>
      <h1 className="alumni-title">Directory</h1>
      <div className="alumni-grid">
        {filteredAlumni.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem', gridColumn: '1/-1' }}>No alumni found.</div>
        ) : (
          filteredAlumni.map((alumni, idx) => (
            <div className="alumni-card animated-card" key={alumni.id} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="alumni-img-wrapper">
                <img src={alumni.image} alt={alumni.name} className="alumni-img" />
              </div>
              <div className="alumni-info">
                <h2 className="alumni-name">{alumni.name}</h2>
                <p className="alumni-batch">Graduation Year: {alumni.graduationYear}</p>
                <p className="alumni-job">{alumni.profession}</p>
                <p className="alumni-location">{alumni.location}</p>
                <p className="alumni-about">{alumni.about}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;
