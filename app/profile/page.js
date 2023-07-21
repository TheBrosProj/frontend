// pages/profile.jsx
'use client'
import { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { auth } from '@/lib/firebase';
import { ChakraProvider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadPage from '@/components/LoadPage';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <LoadPage>
    <Box minH="100vh">
    <Navbar></Navbar>
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading mb={4}>Profile</Heading>
      {user ? (
        <>
          {/* <Text>
            <strong>Name:</strong> {user.displayName}
          </Text> */}
          <Image 
          borderRadius='full'
          boxSize="150px"
          src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user.uid}`}
          alt={user.email}
          ></Image>
          <Text>
            <strong>Email :</strong> {user.email}
          </Text>
          <Text>
            <strong>UUID :</strong> {user.uid}
          </Text>
        </>
      ) : (
        <Text>Please Wait while we try to sign you in or try signing in to view your profile.</Text>
      )}
      </Box>
    {/* <Footer></Footer> */}
    </Box>
    </LoadPage>
    </>
  );
}
