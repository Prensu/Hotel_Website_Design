import BookingBar from "./BookingBar";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>
          A HAVEN OF OPULENCE <br /> AND TRANQUILITY
        </h1>

        <p>
          Where Timeless Elegance Meets Modern Luxury in the Heart of
          RITZIO, Offering Unmatched Comfort and Exquisite Service
        </p>

        <BookingBar />

        <div className="scroll-down">
          <span>SCROLL DOWN</span>
          <div className="arrow">↓</div>
        </div>
      </div>
    </section>
  );
}
