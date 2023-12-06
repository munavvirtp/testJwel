import React, { useState } from 'react';
import { SlidData } from './SlidData';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ImageSlide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
      <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
      {SlidData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='Arabian Jewellery' className='image' />

            )}
            <button className="btn">Explore More</button>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlide;