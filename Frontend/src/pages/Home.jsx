import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglassHalf,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
const stats = [
  {
    title: "Pending Requests",
    icon: faHourglassHalf,
    count: 12,
    bgColor: "pending",
  },
  {
    title: "Approved Students",
    icon: faCheckCircle,
    count: 45,
    bgColor: "approved",
  },
  {
    title: "Rejected Requests",
    icon: faTimesCircle,
    count: 8,
    bgColor: "rejected",
  },
];

const Home = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    setStatuses(stats);
  }, []);

  return (
    <div className="home-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="cards-container">
        {statuses.map((card, idx) => (
          <div key={idx} className={`card ${card.bgColor}`}>
            <div className="card-header">
              <FontAwesomeIcon icon={card.icon} className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
            </div>
            <div className="card-count">{card.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
