import EventCard from "../../components/EventCard/EventCard"
import "./EventList.css";
import Navigation from "../../components/Navigation/Navigation";
import { eventList } from "../../utils/EventDatabase";

const EventList = () => {

  const renderEventCards = () => {
    return eventList.map(({id,heading,date,location,img}) => {
      return(
        <EventCard
        key={id}
        id = {id}
        date = {date}
        heading = {heading}
        location = {location}
        img = {img}
        />
      );
    })
  }

  return (
    <div>
      <div className="event-list-wrapper">
        <div className="event-list">
          <Navigation/>
          {eventList.length > 0 ? (
            renderEventCards()
            ):
            <p>No Events Available</p>}
        </div>
      </div>
    </div>
  )
}

export default EventList