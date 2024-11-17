
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Not sure what type of shower enclosure will work best for your space?</p>
        </div>
        <p className="p__opensans"> Our experts can provide design options and advice during your free on-site estimate. The sky is the limit! With options for every size, space, style, and design, we can truly bring your custom shower or bath enclosure vision to life.
Explore the possibilities by talking to a Kazmi Glass expert today. </p>
      </div>

      <div className="app__chef-sign">
        <p>Jarri Haider</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
