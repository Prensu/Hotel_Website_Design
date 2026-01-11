import "../styles/OurStory.css";
import storyImg from "../assets/OurStory.jpg";

const OurStory = () => {
  return (
    <section className="ourstory">
      <div className="ourstory-container">
        <div className="ourstory-content">
          <h2 className="ourstory-heading">
            <span>OUR STORY:</span>WHERE LUXURY <br/> MEETS LEGACY
          </h2>

          <p>
            Welcome to Ritzia, where luxury meets unparalleled hospitality.
            Nestled in the heart of Amsterdam, Ritzia stands as a beacon of
            elegance, offering our guests an exquisite blend of modern
            sophistication and timeless charm.
          </p>
          <p>
            At Ritzia, our vision is to redefine luxury. We believe in creating
            an environment where every detail is meticulously crafted to offer
            an extraordinary experience. From our opulent interiors to our
            world-class amenities, we strive to provide a sanctuary of comfort
            and indulgence.
          </p>

          <button className="ourstory-btn">Read More →</button>
        </div>

        <div className="ourstory-image">
          <img src={storyImg} alt="Luxury Hotel Interior" />
        </div>
      </div>
    </section>
  );
};


export default OurStory;