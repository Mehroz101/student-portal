import { Button } from "primereact/button";
import React, { useState } from "react";
import "../styles/event.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const method = useForm();
  return (
    <>
      <div className="events_page">
        <div className="page_top flex justify-content-between align-items-center">
          <h1>Events</h1>
          <Button label="Add Event" onClick={() => setShowForm(true)} />
        </div>
      </div>
      {showForm && (
        <>
          <div className="eventForm-container">
            <div className="wrapper-container">
              <div className="form-box">
                <span onClick={() => setShowForm(false)} className="cross">
                  x
                </span>
                <div className="form">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="name">Event Name:</label>
                      <input
                        id="name"
                        placeholder="Event Name"
                        {...method.register("name")}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Description:</label>
                      <textarea
                        id="name"
                        placeholder="Event description"
                        {...method.register("name")}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Status:</label>
                     <select name="status" className="status">
                        <option value="end">End</option>
                        <option value="start">Start</option>
                        <option value="comingsoon">Coming Soon</option>
                     </select>
                    </div>
                    <button className="submit-btn">submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Events;
