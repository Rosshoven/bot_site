import { useState, useEffect, useCallback } from 'react';

const centering = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '4.4rem',
    flexWrap: 'wrap',
}

const PhotoCarousel = ({ images, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false)
  
    const nextImage = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);
  
    const prevImage = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, [images.length]);
  
    useEffect(() => {
        let intervalId;
    //   const intervalId = setInterval(nextImage, interval);
        if (!isPaused) {
            intervalId = setInterval(nextImage, interval);
        }

      return () => clearInterval(intervalId);
    }, [nextImage, interval, isPaused]);
  
    const handleMouseEnter = () => {
        setIsPaused(true);
      };
    
      const handleMouseLeave = () => {
        setIsPaused(false);
      };
    

    return (
      <div className="photo-carousel" style={centering}>
        <h1>Photo Carousel</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <button onClick={prevImage} style={{border: '2px solid black'}}>Previous</button>
            <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{border: '12px solid black'}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
            <button onClick={nextImage}style={{border: '2px solid black'}}>Next</button>
        </div>
      </div>
    );
  };
  
  export default PhotoCarousel;