import React, { useState } from "react";
import "../styles/Lab.css";
import labHero from "../assets/about.png";
import char from "../assets/char.jpg";
import anwal from "../assets/anwal.jpg";
import midlvl from "../assets/midlvl.jpg";
import comi from "../assets/comi.jpg";

const labCards = [
	{
		id: 1,
		image: char,
		desc: "The Environmental Club of MNS UET Multan is a student-led initiative committed to promoting environmental awareness, sustainable practices, and climate action on campus and beyond. The club serves as a platform for students to engage, educate, and act in the fight against climate change and environmental degradation.Founded with the vision of transforming MNS UET into an eco-conscious and sustainable university, the club works hand in hand with faculty, administration, and external organizations to promote a culture of responsibility and conservation.",
	},
	{
		id: 2,
		image: anwal,
		desc: "The General Core Committee of Computer Science Students (GC CSS) at MNS UET Multan is a student-led representative body formed to unite, empower, and uplift the undergraduate students of the Department of Computer Science.GC CSS acts as a bridge between the department faculty, administration, and the student body — ensuring active participation, student welfare, and academic excellence through meaningful initiatives and responsible representation.",
	},
	{
		id: 3,
		image: midlvl,
		desc: "AICP Artificial Intelligence Community of Pakistan. The Artificial Intelligence Community of Pakistan (AICP) – MNS UET Multan Chapter is a student-led society dedicated to advancing the understanding, innovation, and responsible use of Artificial Intelligence (AI) among students and professionals. This chapter operates under the umbrella of the Artificial Intelligence Community of Pakistan, a national platform that connects AI enthusiasts, researchers, developers, and industry experts to shape the future of AI in Pakistan.",
	},
	{
		id: 4,
		image: comi,
		desc: "Character Building Society (CBS). The Character Building Society (CBS) at Muhammad Nawaz Sharif University of Engineering & Technology (MNS UET) Multan is a student-driven platform aimed at cultivating moral integrity, civic sense, patriotism, and social responsibility among the youth. Aligned with the vision of the university and national institutions like NAB and HEC, the society encourages students to become ethical leaders and responsible citizens of Pakistan.",
	},
];

const blogPosts = [
	// {
	//   id: 1,
	//   title: "Why Labs Matter in Engineering Education",
	//   date: "June 2025",
	//   excerpt: "Hands-on lab work bridges the gap between theory and practice, helping students develop critical thinking and technical skills.",
	//   image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
	// },
	// {
	//   id: 2,
	//   title: "Safety First: Best Practices in the Lab",
	//   date: "May 2025",
	//   excerpt: "Learn the essential safety protocols every student should follow to ensure a safe and productive lab experience.",
	//   image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
	// }
];

const Lab = () => {
	const [search, setSearch] = useState("");
	const filteredLabs = labCards.filter(
		(lab) =>
			lab.desc.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<div
			className="lab-page"
			style={{ paddingTop: "100px", minHeight: "80vh" }}
		>
			{/* Hero Section */}
			<section className="lab-hero">
				<div className="lab-hero-content">
					<h1>Modern Labs at MNS-UET</h1>
					<p>
						Our university offers state-of-the-art laboratories for hands-on
						learning, research, and innovation. Explore our labs and discover how
						practical experience shapes future engineers and scientists.
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
					onChange={(e) => setSearch(e.target.value)}
				/>
				<span
					role="img"
					aria-label="search"
					style={{
						marginLeft: 8,
						color: "#888",
						fontSize: "1.2rem",
					}}
				>
					🔬
				</span>
			</div>

			{/* Lab Cards Section */}
			<section className="lab-cards-section">
				<h2>Our societies</h2>
				<div className="lab-cards-grid">
					{filteredLabs.length === 0 ? (
						<div className="no-labs">No societies found.</div>
					) : (
						filteredLabs.map((lab) => (
							<div className="lab-card" key={lab.id}>
								<img
									className="lab-card-img"
									src={lab.image}
									alt="Lab"
								/>
								<div className="lab-card-body">
									<p className="lab-card-desc">{lab.desc}</p>
								</div>
							</div>
						))
					)}
				</div>
			</section>

			{/* Blog Section */}
			<section className="lab-blog-section">
				{/* <h2>Lab Blog</h2> */}
				<div className="lab-blog-grid">
					{blogPosts.map((post) => (
						<div className="lab-blog-card" key={post.id}>
							<img
								className="lab-blog-img"
								src={post.image}
								alt={post.title}
							/>
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
