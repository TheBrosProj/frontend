// pages/index.jsx
'use client'
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Heading as={h1}>404 : Page not Found</Heading>
        </Box>
    </>
  );
}
