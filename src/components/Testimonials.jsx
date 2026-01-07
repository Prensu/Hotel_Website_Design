import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John D",
    text: "An unforgettable experience! The Luxury Room was exquisite, with every detail designed for comfort and elegance. The service was impeccable. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    active: false,
  },
  {
    id: 2,
    name: "Sarah M",
    text: "Our stay at Rista was perfect. The Guest Rooms were cozy and beautifully decorated. The staff was incredibly attentive and made us feel at home.",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    active: true,
  },
  {
    id: 3,
    name: "Emma T",
    text: "The Sea View Suite was a dreamy come true. Waking up to stunning ocean views was magical. The suite was luxurious and the amenities top notch. We’ll definitely be back!",
    image: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    active: false,
  },
];

const Stars = ({ count }) => {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>TESTIMONIALS</h2>
      <p className="subtitle">
        Discover the unforgettable experiences our guests have shared about their stay
      </p>

      <div className="testimonial-cards">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`testimonial-card ${item.active ? "active" : ""}`}
          >
            <div className="quote">“</div>
            <p className="text">{item.text}</p>

            <div className="user">
              <div>
                <h4>{item.name}</h4>
                <Stars count={item.rating} />
              </div>
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button>‹</button>
        <button>›</button>
      </div>
    </section>
  );
}
