import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import "../styles/event.css";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notify } from "../utils/notification";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const method = useForm();
  const addEventMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          "http://localhost:5000/api/user/addevent",
          data,
          config
        );
        if (response.data.success === false) {
          notify("error", response.data.message);
        } else {
          notify("success", response.data.message);
          refetch();
          setShowForm(false);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        notify("error", error.response.data.message || error.message);
      }
    },
  });
  const {data,isLoading,refetch} = useQuery({
    queryKey: ["allevents"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/allevent"
        );
        console.log(response.data.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
const deleteMutation = useMutation({
  mutationFn: async (data) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/user/deleteevent",
        data,
        config
      );
      if (response.data.success === false) {
        notify("error", response.data.message);
      } else {
        notify("success", response.data.message);
        refetch();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notify("error", error.response.data.message || error.message);
    }
  },
})
  const onsubmit = (data) => {
    console.log(data);
    if(data.name == '' || data.description== '' || data.status== '' || data.file== ''){
      return notify("warning", "Please fill all the fields");
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("status", data.status);
    formData.append("image", data.file[0]);
    addEventMutation.mutate(formData);
  };

  return (
    <>
      <div className="events_page">
        <div className="page_top flex justify-content-between align-items-center">
          <h1>Events</h1>
          <Button label="Add Event" onClick={() => setShowForm(true)} />
        </div>
        <div className="events_cards">
          {isLoading && <p>Loading...</p>}
          {data?.data?.map((event, index) => (
            
          <div className="event_card" key={event._id}>
            <div className="event_img">
              <img
                src={"http://localhost:5000/" + event.image}
                alt=""
              />
            </div>
            <div className="event_detail">
              <div className={`event_top `}>
                <span className={`${event.status}`}>{event.status}</span>
                <button className="delete_btn" onClick={() => deleteMutation.mutate({eventId:event._id})}>
                <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
              <h2>{event.name}</h2>
              <p>
                {event.description}
              </p>
            </div>
          </div>
          ))}

       
        </div>
      </div>
      {showForm && (
        <div className="eventForm-container">
          <div className="wrapper-container">
            <div className="form-box">
              <button
                onClick={() => setShowForm(false)}
                className="cross"
                aria-label="Close form"
              >
                x
              </button>
              <div className="form">
                <form onSubmit={method.handleSubmit(onsubmit)}>
                  <div className="form-group">
                    <label htmlFor="name">Event Name:</label>
                    <input
                      id="name"
                      placeholder="Event Name"
                      {...method.register("name")}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      placeholder="Event description"
                      {...method.register("description")}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Status:</label>
                    <select
                      name="status"
                      className="status"
                      {...method.register("status")}
                    >
                      <option value="end">End</option>
                      <option value="ongoing">Start</option>
                      <option value="upcoming">Coming Soon</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="file">Upload Image</label>
                    <input
                      id="file"
                      type="file"
                      accept="image/*"
                      {...method.register("file")}
                    />
                  </div>
                  <button className="submit-btn">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
