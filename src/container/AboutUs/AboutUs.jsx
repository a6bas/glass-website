
import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ lineHeight: '1.6', textAlign: 'justify' }}>
  Kazmi Glass mirrors your extensive style of elegance to every corner of your home. With fully customizable bath & shower glass options, our experts can help you create the shower or bath enclosure of your dreams.
</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We take design and quality seriously, and our glass shower and bath enclosures are no exception. Each shower or bath enclosure at Kazmi Glass is beautifully designed with quality construction you can rely on.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
