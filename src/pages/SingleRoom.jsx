import { useParams } from "react-router-dom";
import roomsData from "../data/roomData";
import "../styles/singleRoom.css";

const SingleRoom = () => {
  const { slug } = useParams();
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) return <h2>Room not found</h2>;

  return (
    <section className="single-room">
      {/* HERO IMAGE */}
      <div className="single-room-hero">
        <img src={room.image} alt={room.title} />
      </div>

      {/* CONTENT */}
      <div className="single-room-content">
        <h1>{room.title}</h1>

        <p className="room-intro">{room.intro}</p>

        {room.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div className="single-room-rate">
          Rates from {room.price}
        </div>

        <button className="book-now-btn">BOOK NOW</button>
      </div>
    </section>
  );
};

export default SingleRoom;
