import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../Images/lekshyabanner.png'
import slide2 from '../Images/nidhibanner.png'
import slide3 from '../Images/nilabanner.png'
import slide4 from '../Images/noorabanner.png'
import slide5 from '../Images/shilabanner.png'
import slide6 from '../Images/siribanner.png'
import slide7 from '../Images/varnabanner.png'
import slide8 from '../Images/yumabanner.png'
import slide9 from '../Images/zarabanner.png'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    image: slide1,
    caption: 'Slide 1'
  },
  {
    image: slide2,
    caption: 'Slide 2'
  },
  {
    image: slide3,
    caption: 'Slide 3'
  },
  {
    image: slide4,
    caption: 'Slide 3'
  },
  {
    image: slide5,
    caption: 'Slide 3'
  },
  {
    image: slide6,
    caption: 'Slide 3'
  },
  {
    image: slide7,
    caption: 'Slide 3'
  },
  {
    image: slide8,
    caption: 'Slide 3'
  },
  {
    image: slide9,
    caption: 'Slide 3'
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow