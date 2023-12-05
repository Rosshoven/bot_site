import { useState, useEffect, useCallback } from 'react';

const centering = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '4.4rem',
    flexWrap: 'wrap',
    paddingTop: '4.4',
}

const buttonStyle = {
    border: '2px solid black', 
    height: '3rem', 
    backgroundColor: 'black',
    color: 'pink',
    margin: '.5rem'
}

const PhotoCarousel = ({ images, interval = 3000 }) => {
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
        <h1 style={{marginTop: '5.4rem', backgroundColor: 'black', color: 'pink', padding: '1rem', borderRadius: '1rem'}}>Boys Photo Carousel</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button className='btn btn-outline-dark' onClick={prevImage} style={buttonStyle}>Previous</button>
            <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{border: '12px solid black', borderRadius: '1rem'}} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
            <button type='button' className='btn btn-outline-dark' onClick={nextImage}style={buttonStyle}>Next</button>
        </div>
      </div>
    );
  };
  
  export default PhotoCarousel;