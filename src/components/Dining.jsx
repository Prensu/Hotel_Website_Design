import "./Dining.css";
import diningImg from "../assets/dining.jpg";

const Dining = () => {
  return (
    <section className="dining">
      <h2 className="dining-title">DINING EXPERIENCE SECTION</h2>

      <div className="dining-wrapper">
        {/* Left Image */}
        <div className="dining-image">
          <img src={diningImg} alt="Luxury dining experience" />
          
        </div>

        {/* Right Content */}
       <div className="dining-content">
  <h3>Savor the Flavors of Ritzia</h3>

  <p>
    Indulge your senses at Ritzia with a dining experience unlike any other.
    Our award-winning chefs, inspired by both global culinary traditions and
    local ingredients, craft dishes that tell a story of flavor, elegance,
    and artistry.
  </p>

 <div className="dining-features">
            <div className="feature">
              <span>✓</span>
              <div>
                <strong>The Ritzia Restaurant</strong>
                <p>
                  Savor gourmet meals in a chic setting from classic French
                  dishes to modern fusion, all crafted with the finest
                  ingredients.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>✓</span>
              <div>
                <strong>The Terrace Lounge</strong>
                <p>
                  Unwind with stunning views, signature cocktails, tapas, or a
                  full meal in a relaxed atmosphere.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>✓</span>
              <div>
                <strong>Private Dining</strong>
                <p>
                  Enjoy exclusive, personalized dining for romantic evenings
                  or business gatherings.
                </p>
              </div>
            </div>
          </div>

  <button className="dining-btn">Explore Our Menus →</button>
</div>

      </div>
    </section>
  );
};

export default Dining;
