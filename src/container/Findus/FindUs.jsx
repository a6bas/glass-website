import React from 'react';
import { SubHeading } from '../../components';
import { FaInstagram } from 'react-icons/fa'; 
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '0rem' }}>Find Us</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#DCCA87' }}>Our Address</p>
        <p className="p__opensans" style={{ marginBottom: '0rem' }}>
          4003 98 St NW Unit 85, Edmonton, AB T6E 6M8, Canada
        </p>

        <button 
          type="button" 
          className="custom__button" 
          style={{ marginTop: '0rem' }}
          onClick={() => window.open('https://www.google.com/maps?q=4003+98+St+NW+Unit+85,+Edmonton,+AB+T6E+6M8,+Canada', '_blank')}
        >
          Get Directions
        </button>
      </div>

      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#DCCA87', marginTop: '1rem' }}>Contact Us</p>
        <p className="p__opensans">+1 587-974-9707</p>
        <p className="p__opensans">kazmiglass@gmail.com</p>
        <p className="p__opensans">Jarri.haider@gmail.com</p>

        <a 
          href="https://www.instagram.com/k.glassinc" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social__icon"
        >
          <FaInstagram size={30} style={{ color: '#DCCA87' }} />
        </a>
      </div>
    </div>

    {/* Add map here on the right side */}
    <div className="app__wrapper_img">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-113.53662824630737%2C53.45733920139287%2C-113.52840638160717%2C53.46046480514661&layer=mapnik&marker=53.45840200217766%2C-113.53251731338501&zoom=15"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Business Location"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
