import Logo from "../assets/bakery-light-1.png"
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGooglePlusG, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <>
    <footer>
          <div id="footer" className="footer">
        <div className="container">
            <img src={Logo} alt=""/>
            <div className="copyWrite">@Copyright 2017. All rights reserved.</div>
            <div className="icons">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                </ul>
                </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
