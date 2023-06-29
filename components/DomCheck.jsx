import React, { useState, useEffect } from 'react';
import { Flex, Spinner } from '@chakra-ui/react'; // Replace 'your-ui-library' with the actual library you're using

const DomCheck = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
      setDomLoaded(true);
  }, []);

  return domLoaded ? (
    // Render child components
    <>{children}</>
  ) : (
    // Render loading spinner
    <Flex align="center" justify="center">
      <Spinner size="xl" />
    </Flex>
  );
};

export default DomCheck;
