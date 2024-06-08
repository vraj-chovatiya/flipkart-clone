import React, { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import S1 from '../../assets/c1.webp';
import S2 from '../../assets/c2.webp';
import S3 from '../../assets/c3.webp';
import S4 from '../../assets/c4.webp';

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    // Add a function to automatically scroll the carousel
    const interval = setInterval(() => {
      const nextIndex = (activeSlideIndex + 1) % 4; // Assuming we have 4 slides
      setActiveSlideIndex(nextIndex);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeSlideIndex]);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div className='slider-div'>
          <img src={S1} alt="slide 0" style={{ width: '100vw', height: 250 }} />
        </div>
        <div className='slider-div'>
          <img src={S2} alt="slide 1" style={{ width: '100vw', height: 250 }} />
        </div>
        <div className='slider-div'>
          <img src={S3} alt="slide 2" style={{ width: '100vw', height: 250 }} />
        </div>
        <div className='slider-div'>
          <img src={S4} alt="slide 3" style={{ width: '100vw', height: 250 }} />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
