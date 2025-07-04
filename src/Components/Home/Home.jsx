import React from "react";
import WhoWeAre from "../../assets/alexandru-stavrica-170390-800x760.jpg";
import Location from "../../assets/full-2-800x640.jpg";
import Info from "../../assets/clem-onojeghuo-206832-600x500.jpg";
import SecondInfo from "../../assets/stas-ovsky-123540-600x500.jpg";
import ThirdInfo from "../../assets/ben-garratt-134774-600x500.jpg";

// at the top of HomeBody.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faUserGroup,
  faHeart,
  faCheck,
  faPhone,
  faHeadphones,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
const HomeBody = () => {
  return (
    <React.Fragment>
      <div id="home" className="home mb-5 ">
        <div className="home-content">
          <p>Welcome to</p>
          <h1>Family Bakery</h1>
          <p className="content">
            {" "}
            We're the biggest, best equipped and most advanced Bakery in the
            greater Los Angeles area.
          </p>
          <div className="home-buttons">
            <button className="LearnMore mx-2">
              <a href="#">Learn More</a>
            </button>
            <button className="contactUs">
              <a href="#">Contact Us</a>
            </button>
          </div>
          <a href="#" className="scroll-button"></a>
        </div>
      </div>
      <div id="whoWeAre" className="mb-5">
        <div className="container whoWeAre">
          <div className="whoWeAreImg">
            <img src={WhoWeAre} alt="" />
          </div>
          <div className="whoWeAreContent">
            <h2>Who We Are?</h2>
            <p>
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLeaf} />
                <span>We care about environment.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>We are trusted by hundreds of clients</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} />
                <span>Social media loves us!</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                <span>WThis list is super easy to create.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="Location" className=" mb-5">
        <div className="container location">
          <div className="location-content">
            <h2>Our Location</h2>
            <p>
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.
            </p>
            <p>
              Story on projects big and small from small residential extensions
              to full house. We are so happy with this theme. Everyday it make
              our lives better.
            </p>
          </div>
          <div className="location-img">
            <img src={Location} alt="" />
          </div>
        </div>
      </div>
      <div id="ourBaking" className="ourBaking">
        <div className="container">
          <h2>Our Baking</h2>
          <p>
            Learn more about them. We have worked truly hard to make them
            perfect for every use
          </p>
          <div className="img-box">
            <div className="information">
              <img src={Info} alt="div" />
              <h3>Cookies</h3>
              <p>
                Proin interdum, ante ut sollicitudin commodo, tellus quam
                sagittis libero, at semper mauris velit a velit. Phasellus
                commodo turpis et lacinia posuere.
              </p>
            </div>
            <div className="information">
              <img src={SecondInfo} alt="div" />
              <h3>Bagels</h3>
              <p>
                Proin interdum, ante ut sollicitudin commodo, tellus quam
                sagittis libero, at semper mauris velit a velit. Phasellus
                commodo turpis et lacinia posuere.
              </p>
            </div>
            <div className="information">
              <img src={ThirdInfo} alt="" />
              <h3>Superior Breads</h3>
              <p>
                Proin interdum, ante ut sollicitudin commodo, tellus quam
                sagittis libero, at semper mauris velit a velit. Phasellus
                commodo turpis et lacinia posuere.
              </p>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="contact-details col-6">
                <h2>Contact Information</h2>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="details">
                  <p>Our contact details:</p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>Manchester St 123-78B, Random 713, UK</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} />
                      <span>+46 123 456 789</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faHeadphones} />
                      <span>+37 431 456 789</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>hello@sitename.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-imgs col-6">
                <iframe
                  style={{ display: "block", width: "100%", border: "none", height: "100%" }}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBody;

