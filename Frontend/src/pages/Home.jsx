import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faHourglassHalf,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const [statuses, setStatuses] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["allevents"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        const response = await axios.get("http://localhost:5000/api/user/allstates",config);
        return response.data.data;
        
      }
      catch (error) {
        console.log(error.message);
      }
    },
  });

  useEffect(() => {
    if (data) {
      const dynamicStats = [
        {
          title: "Pending Requests",
          icon: faHourglassHalf,
          count: data.totalPending,
          bgColor: "pending",
        },
        {
          title: "Approved Students",
          icon: faCheckCircle,
          count: data.totalApproved,
          bgColor: "approved",
        },
        {
          title: "Rejected Requests",
          icon: faTimesCircle,
          count: data.totalRejected,
          bgColor: "rejected",
        },
        {
          title: "Total Events",
          icon: faCalendar,
          count: data.totalEvents,
          bgColor: "eventcard",
        },
      ];
      setStatuses(dynamicStats);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading stats.</p>;

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
