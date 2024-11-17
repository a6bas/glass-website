import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Aforable price, with warranty and Best quality</p>

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>Shower glass</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>Custom shower enclosures </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>10mm sliders</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>6mm sliders </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>2 mirrors</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '0rem 0' }}>3 shelving</p>

        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>We deal in all kind of mirrors</p>
        


        
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
  {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery11, images.gallery10].map((image, index) => (
    <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
      <img src={image} alt="gallery_image" />
      <a 
        href="https://www.instagram.com/k.glassinc" 
        target="_blank" 
        rel="noopener noreferrer"
        className="gallery__image-link"
      >
        <BsInstagram className="gallery__image-icon" />
      </a>
    </div>
  ))}
</div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;