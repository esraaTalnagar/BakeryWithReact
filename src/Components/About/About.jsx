import './About.css'
import OurStory from '../../assets/roman-kraft-56589-800x760.jpg'
const AboutSection = () => {
  return (
    <>
          <div className="title bg-overlay bg-overlay-dark">
        <h1>About</h1>
        <p>Learn more about us.</p>
    </div>
    <div className="container">
        <div id="ourStory" className="wpb_column vc_column_container vc_col-sm-6 col-has-padding col-padding-2 col-padding-left">
            <div className="wpb_column vc_column_container vc_col-sm-6 col-has-padding col-padding-2 col-padding-right our-story-img">
                <img src={OurStory} alt="Our Story" />
            </div>
            <div className="wpb_text_column wpb_content_element  font-size-medium our-story-text">
                <h2>Our Story</h2>
                <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big
                and small from small residential extensions to full house and commercial builds and we are registered NHBC house
                builders.</p>
                <hr/>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    </div>
    <div id="whuOurBakery">
        <div className="heading container">
            <i className="fa-solid fa-box-open"></i>
            <h3>Why our Bakery?</h3>
            <p>Learn why it's worth to try our bakings.</p>
        </div>
        <div className="content container">
            <div className="content1">
                <h5>Facilities</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
            <div className="content2">
                <h5>Best Equipment</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
            <div className="content3">
                <h5>Incredible Location</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
            <div className="content4">
                <h5>Premium Support</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
            <div className="content5">
                <h5>Incredible Team</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
            <div className="content6">
                <h5>Incredible Location</h5>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat
                felis vitae aliquet consequat. Aliquam ullamcorper.</p>
            </div>
        </div>
    </div>
    <div id="count" className="count">
        <div className="likes">
            <i className="fa-solid fa-thumbs-up"></i>
            <div>1430</div>
            <p>Page Likes</p>
        </div>
        <div className="locations">
            <i className="fa-solid fa-shop"></i>
            <div>64</div>
            <p>Locations</p>
        </div>
        <div className="ideas">
            <i className="fa-solid fa-lightbulb"></i>
            <div>100</div>
            <p>Great Ideas</p>
        </div>
        <div className="comments">
            <i className="fa-solid fa-comment"></i>
            <div>420</div>
            <p>Comments</p>
        </div>
    </div>
    </>
  )
}

export default AboutSection
