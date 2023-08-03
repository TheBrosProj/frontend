'use client'
import React, { useState, useEffect } from 'react';
import { Center, Flex, Spinner, Text, Box, DarkMode } from '@chakra-ui/react'; // Replace 'your-ui-library' with the actual library you're using

const LoadPage = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Box>

      {
        domLoaded ? (
          <>{children}</>
        ) : (
          <>
            <Center mt={"50vh"} background={DarkMode}>
              <Spinner size={"xl"}></Spinner>
            </Center>
            <Center mt={"4"}>
              <Text>if you are reading this, change your internet</Text>
            </Center>
          </>
        )
      }
    </Box>
  )
};

export default LoadPage;
