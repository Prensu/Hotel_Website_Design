import roomsData from "../data/roomData";
import { Link } from "react-router-dom";
import "../styles/roomSection.css";

const RoomSection = () => {
  return (
    <section className="rooms">
      <div className="rooms-header">
        <h2>Rooms & Suites</h2>
        <p>Experience refined comfort inspired by heritage</p>
      </div>

      <div className="rooms-grid">
        {roomsData.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="room-image-wrapper">
              <img src={room.image} alt={room.title} />
            </div>

            <div className="room-content">
              <div className="room-title-price">
                <h3>{room.title}</h3>
                <span>{room.price}</span>
              </div>

              <p>{room.shortDescription}</p>

              <Link to={`/rooms/${room.slug}`} className="room-link">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
