import Pic1 from '../../assets/alexandru-stavrica-170390-800x760.jpg';
import Pic2 from '../../assets/ben-garratt-134774-600x500.jpg';
import Pic3 from '../../assets/clem-onojeghuo-206832-600x500.jpg';
import Pic4 from '../../assets/roman-kraft-56589-800x760.jpg';
import Pic5 from '../../assets/stas-ovsky-123540-600x500.jpg';
import Pic6 from '../../assets/full-2-800x640.jpg';
import './Gallery.css';

const GalleryBody = () => {
  return (
    <>
          <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Awesome gallery showcasing our artisan bakings.</p>
    </div>
    <div className="container">
        <section className="gallery-images mt-5 mb-5">
        <div className="row g-3">
            <div className="col-4">
                <img className="img-fluid w-100" src={Pic1} alt="Pic1"/>
            </div>
            <div className="col-4">
                <img className=" img-fluid w-100 h-100" src={Pic2} alt="Pic2"/>
            </div>
            <div className="col-4">
                <img className=" img-fluid w-100 h-100" src={Pic3} alt="Pic3"/>
            </div>
            <div className="col-4">
                <img className=" img-fluid w-100 " src={Pic4} alt="Pic4"/>
            </div>
            <div className="col-4">
                <img className="img-fluid w-100 h-100" src={Pic5} alt="Pic5"/>
            </div>
            <div className="col-4">
                <img className=" img-fluid w-100 h-100 " src={Pic6} alt="Pic6"/>
            </div>
        </div>
    </section></div>

    <div id="conclusion" className="conclusion">
        <div className="container conclusion-grid">
            <div className="about-us">
                <h4>About us</h4>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am
                    text
                    block. Click
                    edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
                <p>We are the champions! We are the most amazing theme of all time, yeah.</p>
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
                    <li><i className="fa-solid fa-location-dot"></i><span>Manchester Road 123-78B, Silictown 7854MD, Great
                            Country</span></li>
                    <li><i className="fa-solid fa-phone"></i><span><a href="#">+46 123 456 789</a></span></li>
                    <li><i className="fa-solid fa-envelope"></i><span><a href="#">hello@sitename.com</a></span></li>
                    <li><i className="fa-solid fa-globe"></i><span><a href="#">http://www.sitename.com</a></span></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default GalleryBody;
