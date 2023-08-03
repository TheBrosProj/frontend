// pages/index.jsx
'use client'
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Grid, Text, Icon, Center, Input, Textarea, Button, Spinner, ChakraProvider } from '@chakra-ui/react';

import Link from 'next/link';



export default function Home() {
    return (
        <>
                <Box minH={'80vh'} display="flex" flexDirection="column">
                    <Box maxW="md" mx="auto" mt={8} p={4}>
                        <Text fontSize={"4xl"} fontWeight={"extrabold"}>About</Text>
                        <Text>One stop solution to keep your brain farts organised</Text>
                    </Box>
                    {/* <FormControl mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Your Name" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Your Email Address" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Your Message" />
                </FormControl>
                <Button colorScheme="gray" variant="solid">
                    Send Message
                </Button> */}
                    <Footer></Footer>
                </Box>
        </>
    );
}
