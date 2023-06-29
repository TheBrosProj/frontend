// components/Navbar.jsx
'use client'
import { Box, Flex, Link, Avatar, Button, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
    const auth = useAuth();
    return (
        <Flex as="nav" align="center" justify="space-between" p={4}>
            <NextLink href="/">
                <Image src="./favicon.png" height="5vh" width="5vh">

                </Image>
            </NextLink>
            {auth.user ? (
                <Flex align="center">
                            <Link href="/profile">
                        <Avatar
                            size="sm"
                            name={auth.user.email}
                            src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${auth.user.uid}`}
                            mr={2}
                            />
                            </Link>
                            <Link href="/profile">
                        <Box mr={2}>{auth.user.email}</Box>
                            </Link>
                    <Button onClick={() => auth.signOut()}>Sign Out</Button>
                </Flex>
            ) : (
                <Flex>
                    <NextLink href="/login">
                        <Button mr={4}>Login</Button>
                    </NextLink>
                    <NextLink href="/signup">
                        <Button >Sign Up</Button>
                    </NextLink>
                </Flex>
            )}
        </Flex>
    );
}
