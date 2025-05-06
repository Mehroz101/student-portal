import {
  faCheckCircle,
  faHourglassHalf,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const stats = [
  {
    title: "Pending Requests",
    icon: (
      <FontAwesomeIcon icon={faHourglassHalf} className="text-white text-3xl" />
    ),
    count: 12,
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Approved Students",
    icon: (
      <FontAwesomeIcon icon={faCheckCircle} className="text-white text-3xl" />
    ),
    count: 45,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Rejected Requests",
    icon: (
      <FontAwesomeIcon icon={faTimesCircle} className="text-white text-3xl" />
    ),
    count: 8,
    gradient: "from-red-400 to-red-600",
  },
];

const Home = () => {
  const [statues, setStatues] = useState([]);
  useEffect(() => {
    console.log(stats);
    setStatues(stats);
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {statues.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-lg p-5 text-white bg-gradient-to-r ${card.gradient} relative overflow-hidden bg-red-400`}
          >
            <div className="absolute top-4 left-4">{card.icon}</div>
            <div className="pt-14">
              <h3 className="text-lg font-medium mb-2">{card.title}</h3>
              <p className="text-3xl font-bold">{card.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
