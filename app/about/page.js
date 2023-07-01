// pages/index.jsx
'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Box, Flex, Grid, Text, Icon, Center, Input, Textarea, Button, Spinner, ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
                            <Box p={4}>
                                <Grid
                                    templateColumns={['1fr', 'repeat(3, 1fr)']}
                                    gap={4}
                                    boxShadow="md"
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Flex direction="column" align={'center'}>
                                        <Link
                                            href='mailto:nandanvarma.me@gmail.com'
                                        >
                                            <FontAwesomeIcon
                                                icon={faEnvelope} size="2x" mb={2} />
                                            {/* <Text>nandanvarma.me@gmail.com</Text> */}
                                        </Link>
                                    </Flex>
                                    <Flex direction="column" align={'center'}>
                                        <Link
                                            href='tel:8639846030'
                                        >
                                            <FontAwesomeIcon
                                                icon={faPhone} size="2x" mb={2} />
                                            {/* <Text>+91 (863) 984-6030</Text> */}
                                        </Link>
                                    </Flex>
                                    <Flex direction="column" align={'center'}>
                                        <Link
                                            href='https://www.linkedin.com/in/nandanvarma'
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedin} size="2x" mb={2} />
                                            {/* <Text>Nandan Varma</Text> */}
                                        </Link>
                                    </Flex>
                                </Grid>
                            </Box>
                        </Box>
            </LoadPage>
        </>
    );
}
