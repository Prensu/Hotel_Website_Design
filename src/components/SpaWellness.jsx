import "./SpaWellness.css";
import spaImage from "../assets/spa.jpg";

const SpaWellness = () => {
  return (
    
    <section className="spa">
      <div className="spa-container">
        {/* LEFT CONTENT */}
        <div className="spa-content">
          <h2 className="spa-title">SPA &amp; WELLNESS EXPERIENCE</h2>

          <h3 className="spa-subtitle">Relax and Refresh at Ritzio Spa</h3>

          <p className="spa-description">
            Escape to a haven of tranquility at Ritzio Spa, where relaxation
            meets luxury. Our expert therapists, inspired by ancient wellness
            traditions and modern techniques, provide treatments designed to
            restore balance, energy, and vitality.
          </p>

          <ul className="spa-list">
            <li>
              <strong>The Wellness Retreat</strong>
              <span>
                Immerse yourself in soothing massages, rejuvenating facials, and
                holistic therapies tailored to your needs, all within a serene
                and elegant setting.
              </span>
            </li>

            <li>
              <strong>Hydrotherapy Haven</strong>
              <span>
                Relax in our state-of-the-art hydrotherapy pools, steam rooms,
                and saunas, designed to detoxify and rejuvenate your body and
                mind.
              </span>
            </li>

            <li>
              <strong>Private Spa Suites</strong>
              <span>
                Enjoy exclusive spa experiences in our private suites with
                personalized treatments and luxurious amenities.
              </span>
            </li>
          </ul>

          <button className="spa-button">Explore Our Menus →</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="spa-image">
          <img src={spaImage} alt="Spa wellness experience" />
        </div>
      </div>
    </section>
  );
};

export default SpaWellness;
