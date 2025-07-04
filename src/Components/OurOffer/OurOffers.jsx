import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

import './OurOffer.css'
import { Link } from 'react-router-dom';

const OurOffers = () => {
  return (
    <>
      <div className="title bg-overlay bg-overlay-dark">
        <h1>Our Offer</h1>
        <p>
          <Link className="opacity-50" to="/">
            Home /{" "}
          </Link>
          Our Offer
        </p>
      </div>
      <div id="#offer" className="offers container">
        <div >
          <h5>
            Great Service<span>15$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Beef Delicious<span>12$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Short Cut<span>24$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div>
          <h5>
            Quick Dig<span>13$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            King Size<span>29$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div>
          <h5>
            Enormous Bite<span>32$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div>
          <h5>
            Short Stuff<span>9$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Premium Type<span>36$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Luxurious Offer<span>52$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Great Service<span>15$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div>
          <h5>
            Beef Delicious<span>12$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
        <div >
          <h5>
            Beef Delicious<span>12$</span>
          </h5>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies nisi at scelerisque pellentesque. Nunc feugiat felis
            vitae.
          </p>
        </div>
      </div>
      <div id="conclusion" className="conclusion">
        <div className="container conclusion-grid">
          <div className="about-us">
            <h4>About us</h4>
            <p>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur. I am text block. Click edit
              button to change this text. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <p>
              We are the champions! We are the most amazing theme of all time,
              yeah.
            </p>
          </div>
          <div className="special">
            <h4>Why we are special?</h4>
            <ul>
              <li>Our magical recipe.</li>
              <li>We care about environment.</li>
              <li>We are trusted by hundreds of clients.</li>
              <li>Social media loves us!</li>
              <li>This list is super easy to create.</li>
            </ul>
          </div>
          <div className="hours">
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday 10AM - 9PM</li>
              <li>Tuesday 10AM - 9PM</li>
              <li>Wednesday 10AM - 9PM</li>
              <li>Thursday 10AM - 10PM</li>
              <li>Friday 10AM - 10PM</li>
              <li>Weekends 10AM - 11PM</li>
            </ul>
          </div>
          <div className="contact-details">
            <h4>Contact Details</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  Manchester Road 123-78B, Silictown 7854MD, Great Country
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>
                  <a href="#">+46 123 456 789</a>
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>
                  <a href="#">hello@sitename.com</a>
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
                <span>
                  <a href="#">http://www.sitename.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurOffers
