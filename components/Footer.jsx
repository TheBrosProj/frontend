// components/Footer.jsx
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <Box as="footer" mt="auto">
      {/* <Flex align="center" justify="center">
        <NextLink href="/privacy-policy">
          <Link mr={4}>Privacy Policy</Link>
        </NextLink>
        <NextLink href="/terms-of-service">
          <Link>Terms of Service</Link>
        </NextLink>
      </Flex> */}
      <Box>
        <Grid
          templateColumns={['1fr', 'repeat(3, 1fr)']}
          gap={4}
          boxShadow="md"
          p={2}
          borderRadius="md"
        >
          <Flex direction="column" align={'center'} textAlign={'center'}>
            <Link mt={'4'}
              href='mailto:nandanvarma.me@gmail.com'
            >
              <FontAwesomeIcon
                icon={faEnvelope} size="1x" mb={2} />
              <Text>nandanvarma.me@gmail.com</Text>
              {/* <Text>nandanvarma.me@gmail.com</Text> */}
            </Link>
          </Flex>
          <Flex direction="column" align={'center'} textAlign={'center'}>
            <Link mt={'4'}
              href='tel:8639846030'
            >
              <FontAwesomeIcon
                icon={faPhone} size="1x" mb={2} />
              <Text>+91 (863) 984-6030</Text>
            </Link>
          </Flex>
          <Flex direction="column" align={'center'} textAlign={'center'}>
            <Link mt={"4"}
              href='https://www.linkedin.com/in/nandanvarma'
            >
              <FontAwesomeIcon
                icon={faLinkedin} size="1x" mb={2} />
              <Text>Nandan Varma</Text>
            </Link>
          </Flex>
        </Grid>
      </Box>
      <Text mt={4} textAlign="center">
        &copy; {new Date().getFullYear()} Nandan Varma. All rights reserved.
      </Text>
    </Box>
  );
}
