import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const ShowEvents = () => {
    const {data,isLoading} = useQuery({
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
  return (
    <div className='events_page'>
        <h1 className='events_title'>All Events</h1>
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
  )
}

export default ShowEvents
 