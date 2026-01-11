import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-page">
      {/* TITLE */}
      <div className="contact-title">
        <h1>
          CONTACT <span>US</span>
        </h1>
        <p>We’d love to welcome you at Ritzio</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="contact-content">
        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="Ritzio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.997421424259!2d85.28753606433457!3d27.643101547332428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17ee4e10205b%3A0xcc1a88f761f8297a!2sSikali%20Temple!5e0!3m2!1sen!2snp!4v1736238405910!5m2!1sen!2snp"
            loading="lazy"
          ></iframe>
        </div>

        {/* INFO */}
        <div className="contact-info">
          <div>
            <h3>Ritzio Luxury Hotel</h3>
            <p>
              44700 Bhainsepati Chowk <br />
              Lalitpur, Nepal
            </p>
          </div>

          <div>
            <p>
              Phone: <span>+977 9869221606</span>
            </p>
            <p>
              Email: <span>info@ritziohotel.com</span>
            </p>
          </div>

          <div>
            <p className="highlight">Experience World-Class Hospitality</p>
            <p>
              From elegant suites to personalized services, Ritzio is designed
              to make your stay unforgettable.
            </p>
          </div>

          <button className="contact-btn">
            Explore Our Rooms
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
