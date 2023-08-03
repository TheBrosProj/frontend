'use client'
import React from 'react';
import { Box, Grid, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import Footer from '@/components/Footer';


const ContactPage = () => {
    return (
            <Box minH={'100vh'} display="flex" flexDirection="column">
                <Box maxW="md" mx="auto" mt={8} p={4}>
                <Heading as="h1" mb={4} size="xl" color="gray.800">
                    Contact Us
                </Heading>
                <Text mb={6} color="gray.600">
                    We'd love to hear from you! Fill in the form below to get in touch.
                </Text>
                </Box>
                <Box boxSize={"lg"} mx="auto" mt={8} p={4} display="flex" flexDirection="column" textAlign={"center"}>
                <FormControl mb={4}>
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
                </Button>
                </Box>
            <Footer></Footer>
            </Box>
    );
};

export default ContactPage;
