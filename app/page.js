// pages/index.jsx
'use client'
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import ImageCarousel from '@/components/Carousel';
import { useState, useEffect } from 'react';

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (

        <ChakraProvider>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Navbar />

            <ImageCarousel></ImageCarousel>
            <Box maxW="md" mx="auto" mt={8} p={4}>
              <h1>Welcome to the Homepage!</h1>
              <p>Content of your homepage goes here.</p>
            </Box>
            <Footer />

          </Box>
        </ChakraProvider>
      )}
    </>
  );
}
