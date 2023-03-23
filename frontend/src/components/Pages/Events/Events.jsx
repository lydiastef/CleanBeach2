import "./Events.scss";
import beachfun from "../../../images/beachtrash.jpg";
import { NavLink } from "react-router-dom";
import EventCards from "../../EventCards/EventCards";

const EventsPage = () => {
  return (
    <>
    <div className="header">
      <div className="eventimgh2">
        <img className="beachfun" src={beachfun} alt="peopleonbeach" />
        <h1 className="h1events">Events</h1>
        <p className="eventtext">A time and place is set were we come together to help make difference. 
          Events are made to spread awareness about the environmental effects littering has.</p>
      </div>
        <div className="eventBtn">
          <NavLink to="/createevent">
            <button className="createeventbtn">Create Event</button>
          </NavLink>
        </div>
    </div>
    <div className="upcomingevents">
        <h2 className="h2upcoming">Upcoming Events</h2>
        <EventCards></EventCards>
    </div>
      
    </>
    
  );
};

export default EventsPage;
