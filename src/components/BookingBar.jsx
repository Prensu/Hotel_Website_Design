import "./BookingBar.css";

export default function BookingBar() {
  return (
    <div className="booking-bar">
      <input type="text" placeholder="8 Jun - 16 Jun" />
      <input type="text" placeholder="Amsterdam" />
      <input type="text" placeholder="2 People" />
      <button>Search</button>
    </div>
  );
}
