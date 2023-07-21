// pages/index.jsx
'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Box, Flex, Grid, Text, Icon, Center, Input, Textarea, Button, Spinner, ChakraProvider } from '@chakra-ui/react';

import Link from 'next/link';
import LoadPage from '@/components/LoadPage';



export default function Home() {
    return (
        <>
            <LoadPage>
                        <Box minHeight="100vh" display="flex" flexDirection="column">
                            <Navbar />
                            <Box maxW="md" mx="auto" mt={8} p={4}>
                                <Text fontSize={"4xl"} fontWeight={"extrabold"}>About Us</Text>
                                <Text>We are a bunch of individuals who are insterested in solving things.</Text>
                            </Box>
                            <Footer />

                        </Box>
            </LoadPage>
        </>
    );
}
