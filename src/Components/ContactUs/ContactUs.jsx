import { faEnvelope, faHeadphones, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
      <div className="title bg-overlay bg-overlay-dark">
        <h1>Contact</h1>
        <p>
          <Link className="opacity-50" to="/">
            Home /{" "}
          </Link>
          Contact
        </p>
      </div>
      <div className="contact">
        <div className="container my-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="contact-massege-box">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mb-4">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="10"
                  ></textarea>
                </div>
                <button type="submit" className="btn d-md-block custom  w-100">
                  send
                </button>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="contact-details">
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
                      <FontAwesomeIcon icon={faMapLocation} />
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/personal-trackers/">
            Personal GPS
          </a>
        </iframe>
      </div>
    </>
  );
}

export default ContactUs
