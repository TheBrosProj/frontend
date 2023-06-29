// components/Carousel.jsx
import { Box, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <Box margin={"12"} borderRadius={"3xl"}>
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
    <Box overflow="hidden">
      <Image src="./image.jpg" alt="Image 1" objectFit="cover" />
    </Box>
    <Box overflow="hidden">
      <Image src="./image.jpg" alt="Image 1" objectFit="cover" />
    </Box>
    <Box overflow="hidden">
      <Image src="./image.jpg" alt="Image 1" objectFit="cover" />
    </Box>
    </Carousel>
    </Box>
  );
}
