import './Rooms.css';

// Import images from assets
import room1 from '../assets/rooms/room1.jpg';
import room2 from '../assets/rooms/room2.jpg';
import room3 from '../assets/rooms/room3.jpg';
import room4 from '../assets/rooms/room4.jpg';
import room5 from '../assets/rooms/room5.jpg';
import room6 from '../assets/rooms/room6.jpg';

const rooms = [
  {
    title: 'Delux Room',
    price: 'Price from $330.0 Night',
    image: room1,
  },
  {
    title: 'Modern Room',
    price: 'Price from $330.0 Night',
    image: room2,
  },
  {
    title: 'Cozy Room',
    price: 'Price from $330.0 Night',
    image: room3,
  },
  {
    title: 'Family Suit',
    price: 'Price from $330.0 Night',
    image: room4,
  },
  {
    title: 'Grand Luxury Room',
    price: 'Price from $330.0 Night',
    image: room5,
  },
  {
    title: 'Sea View Room',
    price: 'Price from $330.0 Night',
    image: room6,
  }
];

const Rooms = () => {
  return (
    <section className="rooms">
      {/* Header */}
      <div className="rooms-header">
        <div className="rooms-header-left">
          <span className="rooms-tag">Room / Suite</span>
          <h2>Elegantly Curated Rooms</h2>
        </div>

        <div className="rooms-header-right">
          <p>
            Every room is designed with comfort, style, and sophistication
            to give you a truly luxurious stay.
          </p>
          <button className="rooms-btn">View All Rooms →</button>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.title} />
            <div className="room-info">
              <h4>{room.title}</h4>
              <span>{room.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
