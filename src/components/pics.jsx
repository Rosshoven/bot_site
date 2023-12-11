import Pic_1 from '../images/Pic_1.jpeg';
import Pic_2 from '../images/Pic_2.jpeg';
import Pic_3 from '../images/Pic_3.jpeg';
import Pic_4 from '../images/Pic_4.jpeg';
import Pic_5 from '../images/Pic_5.jpeg';
import Pic_6 from '../images/Pic_6.jpeg';
import Logo_Pink from '../images/Logo_Pink.png';
import PhotoCarousel from './carousel';


export default function Pics() {
  
  const images = [
      `${Pic_1}`,
      `${Pic_2}`,
      `${Pic_3}`,
      `${Pic_4}`,
      `${Pic_5}`,
      `${Pic_6}`,
    ];

  const Background = {
        backgroundImage: `url(${Logo_Pink})`,
        backgroundSize: '100%',
        width: '100%',
        height: '100%',
        margin: '4.5rem 0', 
        opacity: '',
        filter: 'grayscale(20%) sepia(10%) contrast(100%) brightness(90%)',
        // padding: '0',
      };
      

      return (
        <div className="app" style={Background}>
          {/* <h1 style={{display: 'flex', justifyContent: 'center'}}>Photo Carousel</h1> */}
          <PhotoCarousel images={images}/>
        </div>
      );
};