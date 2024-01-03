import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Donate = () => {
  return (
    <div className = "footer">
      <div className = "contact-section">
      <h1> Contact us!</h1>
          <div className = "contact-box">
          <h2> Contact Number: 65623231</h2>
          <h2> Location: 461 Clementi Rd, Singapore 599491</h2>
          <h2> Enquiries: PetSafeHaven@org.sg</h2>
          <h2> Opening Hours: 9am - 6pm</h2>
          <h2> Sunday: Closed </h2>
          </div>
      </div>

      <div className = "donate-section">
          <h1> Donate! </h1>
          <div className = "donate-box">
            <h2>Donate to help provide the animals with better care!</h2>
            <h3> Use PayNow! or PayLah!</h3>
            <img src = "img/QRcode.png" alt =""></img>
          </div>
      </div>

      <div className = "socialmedia-section">
      <h1> Social Media </h1>
          <div className = "socialmedia-box">
            <div className = "youtube">
              <FontAwesomeIcon icon={faYoutube} size="2x" /> 
            </div>  Youtube
            <div className = "facebook">       
            <FontAwesomeIcon icon={faFacebook} size="2x" /> 
            </div> Facebook
            <div className = "twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </div> Twitter
            <div className = "instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div> Instagram
          </div>
      </div>

      <div className = "copyright">
      <p>&#169; Zyl272 All Right Reserved</p>
      </div>
    </div>

 
  );
}

export default Donate;