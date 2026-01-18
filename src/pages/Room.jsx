import "./Rooms.css";
import roomsData from "../data/roomData";
import { Link } from "react-router-dom";
import CustomButton from "../components/ui/customButton";

const Room = () => {
  return (
    <section className="rooms-page">
      <div className="rooms-page-header">
        <h1>Rooms & Suites</h1>
        <p>
          A collection of thoughtfully designed rooms and suites inspired by
          Nepal’s architectural heritage.
        </p>
      </div>

      <div className="rooms-page-grid">
        {roomsData.map((room) => (
          <div className="rooms-page-card" key={room.id}>
            <div className="rooms-page-image">
              <img src={room.image} alt={room.title} />
            </div>

            <div className="rooms-page-content">
              <h2>{room.title}</h2>
              <p>{room.intro}</p>

              <Link
                to={`/rooms/${room.slug}`}
                className="rooms-read-more"
              >
                Read more →
              </Link>

              <div className="rooms-page-footer">
                <div className="rooms-price">
                  <span>Rates from</span>
                  <strong>{room.price}</strong>
                </div>

                <CustomButton
                  title="Book Now"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Room;
