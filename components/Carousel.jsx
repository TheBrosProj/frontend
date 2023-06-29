// components/Carousel.jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <Carousel  autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://i.imgur.com/nuANVcZ.jpeg" height={'50vh'} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="https://i.imgur.com/nuANVcZ.jpeg" height={'50vh'} alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="https://i.imgur.com/nuANVcZ.jpeg" height={'50vh'} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
}
