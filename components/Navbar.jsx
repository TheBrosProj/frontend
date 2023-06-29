// components/Navbar.jsx
'use client'
import { Box, Flex, Link, Avatar,Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
  const auth = useAuth();
  return (
    <Flex as="nav" align="center" justify="space-between" p={4} bg="blue.500" color="white">
      <NextLink href="/">
        <Link>Home</Link>
      </NextLink>
      {auth.user ? (
        <Flex align="center">
          <Avatar
            size="sm"
            name={auth.user.email}
            src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${auth.user.uid}`}
            mr={2}
          />
          <Box mr={2}>{auth.user.email}</Box>
          <Button colorScheme="whiteAlpha" onClick={() => auth.signOut()}>Sign Out</Button>
        </Flex>
      ) : (
        <Flex>
          <NextLink href="/login">
            <Button colorScheme="whiteAlpha" mr={4}>Login</Button>
          </NextLink>
          <NextLink href="/signup">
            <Button colorScheme="whiteAlpha">Sign Up</Button>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}
