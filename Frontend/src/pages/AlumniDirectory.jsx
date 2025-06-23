import "../styles/AlumniDirectory.css";
import vcCon from "../assets/vc-con.jpg";
import Shehraz from "../assets/Shehraz.jpg";
import Saad from "../assets/Saad.jpg";
import Nisar from "../assets/Nisar.jpg";
import Honhaar from "../assets/Honhaar.jpg";
import bannerImg1 from "../assets/bannerImg1.jpg";
import bannerImg from "../assets/bannerImg.png";
import Asif from "../assets/Asif.jpg";
import Ammar from "../assets/Ammar.jpg";
import about from "../assets/about.png";

const alumniData = [
  {
    id: 1,
    name: "Ayesha Siddiqui",
    image: Shehraz,
    graduationYear: "2019",
    profession: "Software Engineer, Google",
    location: "San Francisco, USA",
    about: "Ayesha is a passionate developer and community leader, currently working at Google. She loves mentoring students and contributing to open source.",
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    image: Saad,
    graduationYear: "2018",
    profession: "Project Manager, Siemens",
    location: "Berlin, Germany",
    about: "Bilal specializes in smart grid solutions and has led multiple international projects. He is an active alumni ambassador.",
  },
  {
    id: 3,
    name: "Fatima Noor",
    image: Nisar,
    graduationYear: "2020",
    profession: "Researcher, MIT",
    location: "Boston, USA",
    about: "Fatima is pursuing her PhD at MIT and has published several papers in robotics and AI. She volunteers for STEM outreach.",
  },
  {
    id: 4,
    name: "Hamza Tariq",
    image: Honhaar,
    graduationYear: "2017",
    profession: "Senior Engineer, NESPAK",
    location: "Lahore, Pakistan",
    about: "Hamza has worked on major infrastructure projects in Pakistan and is a guest lecturer at his alma mater.",
  },
  {
    id: 5,
    name: "Sana Rauf",
    image: bannerImg1,
    graduationYear: "2016",
    profession: "Process Engineer, Shell",
    location: "Dubai, UAE",
    about: "Sana is an expert in process optimization and safety. She is a frequent speaker at international engineering conferences.",
  },
  {
    id: 6,
    name: "Ali Zafar",
    image: bannerImg,
    graduationYear: "2015",
    profession: "CTO, TechStart",
    location: "Karachi, Pakistan",
    about: "Ali co-founded a successful tech startup and is passionate about innovation in the local tech ecosystem.",
  },
  {
    id: 7,
    name: "Mehwish Khan",
    image: Asif,
    graduationYear: "2014",
    profession: "Data Scientist, Facebook",
    location: "London, UK",
    about: "Mehwish leads a team of data scientists and is an advocate for women in STEM.",
  },
  {
    id: 8,
    name: "Usman Riaz",
    image: Ammar,
    graduationYear: "2013",
    profession: "Civil Engineer, Bechtel",
    location: "Doha, Qatar",
    about: "Usman has managed large-scale construction projects across the Middle East.",
  },
  {
    id: 9,
    name: "Hira Shah",
    image: about,
    graduationYear: "2012",
    profession: "Professor, UET",
    location: "Multan, Pakistan",
    about: "Hira is a respected academic and has published research in renewable energy.",
  },
  {
    id: 10,
    name: "Zain Ul Abideen",
    image: vcCon,
    graduationYear: "2011",
    profession: "Lead Architect, Arup",
    location: "Sydney, Australia",
    about: "Zain specializes in sustainable architecture and green building design.",
  },
  {
    id: 11,
    name: "Rabia Qureshi",
    image: Shehraz,
    graduationYear: "2010",
    profession: "HR Manager, Unilever",
    location: "Lahore, Pakistan",
    about: "Rabia is known for her leadership in corporate HR and employee wellness programs.",
  },
  {
    id: 12,
    name: "Imran Aslam",
    image: Saad,
    graduationYear: "2009",
    profession: "Entrepreneur, AgriTech",
    location: "Faisalabad, Pakistan",
    about: "Imran founded an agri-tech company that helps farmers increase crop yields.",
  },
  {
    id: 13,
    name: "Nida Hassan",
    image: Nisar,
    graduationYear: "2008",
    profession: "Consultant, Deloitte",
    location: "Toronto, Canada",
    about: "Nida advises Fortune 500 companies on digital transformation.",
  },
  {
    id: 14,
    name: "Fahad Iqbal",
    image: Honhaar,
    graduationYear: "2007",
    profession: "Director, Engro Corp",
    location: "Karachi, Pakistan",
    about: "Fahad is a director at Engro and a mentor for young professionals.",
  },
  {
    id: 15,
    name: "Sadia Mir",
    image: bannerImg1,
    graduationYear: "2006",
    profession: "Chief Scientist, CERN",
    location: "Geneva, Switzerland",
    about: "Sadia leads a research team at CERN and is a pioneer in particle physics.",
  },
  // Add more alumni as needed
];

const AlumniDirectory = () => {
  return (
    <div className="alumni-directory-container" style={{ paddingTop: "100px", minHeight: "80vh" }}>
      <h1 className="alumni-title">Alumni Directory</h1>
      <div className="alumni-grid">
        {alumniData.map((alumni, idx) => (
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
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;
