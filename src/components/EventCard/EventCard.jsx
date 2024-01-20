import "./EventCard.css";

const EventCard = ({id,heading,date,location,img}) => {
  const {year,month} = date;
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year:{year}</span>
            <span>Month:{month}</span>
          </p>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-img-wrapper">
        <img src={img} alt="event-image"></img>
      </div>
    </>
  )
}

export default EventCard;