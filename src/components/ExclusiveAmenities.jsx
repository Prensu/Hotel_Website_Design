import "./ExclusiveAmenities.css";
import { WavesLadder } from 'lucide-react';
import { Flame } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Baby } from 'lucide-react';
import { Volleyball } from 'lucide-react';
const amenities = [
  {
    title: "Infinity Pool",
    description:
      "Relax and unwind at our heated rooftop infinity pool, offering breathtaking panoramic views of the city skyline. Perfect for a tranquil swim by day or a romantic sunset experience in the evening.",
    icon: <WavesLadder />,
  },
  {
    title: "Luxury Spa",
    description:
      "Immerse yourself in ultimate relaxation at our world-class spa. Choose from a range of rejuvenating treatments, including soothing massages, revitalizing facials, and holistic wellness therapies.",
    icon: <Flame />,
  },
  {
    title: "Fine Dining",
    description:
      "Indulge in an extraordinary culinary journey at our fine dining restaurant. Enjoy gourmet meals crafted by award-winning chefs using the freshest ingredients from around the world.",
    icon: <HandPlatter />,
  },
  {
    title: "Fitness Center",
    description:
      "Maintain your health and wellness routine in our state-of-the-art fitness center. Equipped with the latest machines and personal training sessions for all fitness levels.",
    icon: <Dumbbell />,
  },
  {
    title: "Childcare Services",
    description:
      "Enjoy your stay with peace of mind knowing our professional childcare team provides expert babysitting services in a safe and engaging environment.",
    icon:  <Baby />,
  },
  {
    title: "Private Beach Access",
    description:
      "Escape to our exclusive private beach just minutes from the hotel. Experience serene golden sands, crystal-clear waters, and personalized service.",
    icon: <Volleyball />,
  },
];

const ExclusiveAmenities = () => {
  return (
    <section className="amenities">
      <h2 className="amenities-title">EXCLUSIVE AMENITIES</h2>
      <p className="amenities-subtitle">
        At Ritzio, we offer a range of premium amenities to ensure your stay is
        as luxurious and comfortable as possible.
      </p>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            <div className="amenity-header">
              <span className="amenity-icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="amenities-button">Explore All Amenities →</button>
    </section>
  );
};

export default ExclusiveAmenities;
