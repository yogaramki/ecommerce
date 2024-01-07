import Carousel from 'react-bootstrap/Carousel';
import first from "./assets/first.jpg"
import sec from "./assets/sec.webp"
import images from "./assets/images.jpg"
import cos from './assets/cos.webp'
import OIP from './assets/OIP.jpg'


function Caros() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img src={cos} alt=""  width={1000} height={500}/>
        
      </Carousel.Item>
      <Carousel.Item>
  
       <img src={sec} alt=""  width={1000} height={500} />
      </Carousel.Item>
      <Carousel.Item>
  <img src={OIP} alt=""   width={1000} height={500}/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Caros;