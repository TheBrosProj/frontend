import React, { useState, useEffect } from 'react';
import { ChakraProvider, Center, Flex, Spinner, Text } from '@chakra-ui/react'; // Replace 'your-ui-library' with the actual library you're using

const LoadPage = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <ChakraProvider>
        {
          domLoaded ? (
            <>{children}</>
          ) : (
            <>
              <Center mt={"50vh"}>
                <Spinner size={"xl"}></Spinner>
              </Center>
              <Center mt={"4"}>
                <Text>if you are reading this, change your internet</Text>
              </Center>
            </>
          )
        }
      </ChakraProvider>
    </>
  )
};

export default LoadPage;
