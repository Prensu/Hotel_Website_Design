import "./Rooms.css";
import room1 from "../assets/rooms/room1.jpg";
import room2 from "../assets/rooms/room2.jpg";
import room7 from "../assets/rooms/room7.jpg";
import room8 from "../assets/rooms/room8.jpg";
import heroImg from "../assets/dwarika.jpg";

const roomsData = [ {
  heading: "Heritage Deluxe Room",
  description:
    "Step into a world of timeless elegance with our Heritage Deluxe Rooms, where Nepal’s rich artistic traditions come to life. Thoughtfully designed with intricately carved woodwork and handwoven textiles.",
  price: "$ 285.26",
  img: room1,
},
{
  heading: "Junior Suite",
  description:
    "Experience the grandeur of Nepal’s rich heritage in our Junior Suites, where artistry and comfort come together in a timeless embrace.",
  price: "$ 387.30",
  img: room2,
}];

const Room = () => {
  return (
    <>
   
      <section
        className="room-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="room-hero-overlay">
          <h1>Living at The Dwarika’s</h1>
        </div>
      </section>

      <section className="room-intro">
        <div className="room-container">
          <h2>
            A Unique Experience of Living in the Essence of Traditional <br />
            Nepali Ambience
          </h2>

          <p>
            With 76 meticulously designed rooms and suites, the Dwarika’s offers a
            unique experience as a serene retreat amid Kathmandu’s vibrant city.
            Each room is spacious and has been individually designed to blend
            intricate Nepali design motifs with a contemporary lifestyle
            interspersed with original artworks.
            <br />
            <br />
            Rooms and suites capture the Himalayan essence without compromising
            on luxury reflecting its commitment to heritage and sustainability.
            The flooring is adorned with handmade terracotta tiles, the
            upholsteries are handwoven and locally produced, and the linen is
            organic.
          </p>
        </div>
      </section>

      <section className="room-listing">
        <div className="room-list-grid">
          <RoomCard
            img={room1}
            title="Heritage Deluxe Room"
            price="$ 285.26"
            text="Step into a world of timeless elegance with our Heritage Deluxe Rooms, where Nepal’s rich artistic traditions come to life. Thoughtfully designed with intricately carved woodwork and handwoven textiles."
          />

          <RoomCard
            img={room2}
            title="Junior Suite"
            price="$ 387.30"
            text="Experience the grandeur of Nepal’s rich heritage in our Junior Suites, where artistry and comfort come together in a timeless embrace."
          />
        </div>
      </section>
    </>
  );
};

const RoomCard = ({ img, title, text, price }) => (
  <div className="room-item">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>

    <a href="#" className="read-more">
      Read more →
    </a>

    <div className="room-rate">
      <span>Rates from</span>
      <strong>{price}</strong>
    </div>

    <button className="book-btn">BOOK NOW</button>
  </div>
);

export default Room;
