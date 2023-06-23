import React from 'react';
import './footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaComments } from 'react-icons/fa'; // Import Font Awesome icons
import { RiShieldKeyholeLine, RiHomeGearLine, RiBuilding2Line } from 'react-icons/ri'; // Import Material-UI icons
import Form from '../pages/Form';

function Footer() {
  return (
    <div className='footer'>
      <div className='bottom'>
        <div>
          <h4>About Company</h4>
          <p>
            Kerio-Valley is the leading regional security provider
            <br />for technology-driven security solutions across
            <br /> North-Rift regions.
            <br /> Founded and headquartered in Kenya in 2010, the company
            <br /> has grown in stature and now has offices in Kenya North Rift regions.
          </p>
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href='/'>
            <FaMapMarkerAlt /> Kerio-Valley Headquarters- Eldoret Kenya
          </a>
          <a href='/'>
            <FaPhone /> Tel.: +254 711 069 999
          </a>
          <a href='/'>
            <FaEnvelope /> Email: info@keriovalley.co.ke
          </a>
        </div>
        <div>
          <h4>Our Solutions</h4>
          <a href='/'>
            <RiShieldKeyholeLine /> Personal security
          </a>
          <a href='/'>
            <RiHomeGearLine /> Home security
          </a>
          <a href='/'>
            <RiBuilding2Line /> Enterprise security
          </a>
        </div>
        <div>
          <h4>Newsletter</h4>
          <Form />
        </div>
      </div>
      <p>&copy; The Kerio-Valley Security Agency</p>
      <div className="social-icons">
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>
            <a href='/'>
              <FaInstagram />
            </a>
            <a href='/'>
              <FaComments />
            </a>
          </div>
    </div>
  );
}

export default Footer;
