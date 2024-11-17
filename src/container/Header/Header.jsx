import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase a Clearer View" />
      <h1 className="app__header-h1">Crafting Clear Views and Secure Spaces</h1>
      <p className="p__opensans"  style={{ margin: '2rem 0' }}>Exceptional Windows & Glass Solutions for Every Home and Business </p>
      <button type="button" className="custom__button">Explore More</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;