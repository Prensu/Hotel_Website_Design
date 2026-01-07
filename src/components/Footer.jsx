import "./footer.css";

export default function Footer()
{
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3 className="logo">RITZIO</h3>
                        <p>
                             Experience luxury like never before at Ritzio, where timeless
            elegance meets modern comfort. Discover the perfect getaway with
            world-class service and unforgettable amenities.
                        </p>
                        <div className="socials">
                                <span>f</span>
                                <span>in</span>
                                <span>p</span>
                                <span>x</span>

                        </div>
                </div>


                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li>Rooms & Suites</li>
                        <li>Dining Experience</li>
                        <li>Wellness & Spa</li>
                        <li>Blog</li>
                        <li>Offers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Help</h4>
                    <ul>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Accessibillity</li>
                        <li>Privacy policy</li>
                        <li>Terms of Services</li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Suscribe To Our NewsLetters</h4>
                    <p>
                               Stay updated with exclusive offers, personalized experiences,
            and curated stories from Ritzio. Subscribe now to be the first to
            know about our latest updates and luxury events.
          </p>

                <div className="newsletter-form">
                    <input type="email" placeholder="please enter your email" />
                    <button>Susribe</button>
                </div>
                </div>
            </div>



            <div className="footer-bottom">
                <p>@2024 Ritzio Luxury Hotel. All Rights Reserved</p>

                <select>
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                </select>
            </div>
        </footer>
    )
}