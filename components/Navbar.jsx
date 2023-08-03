'use client'
import { Box, Text, Flex, Avatar, Button, Image, Grid, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, useColorMode, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlay, faSun } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const auth = useAuth();
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode()
    const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
    return (
        <Flex as="nav" align="center" justify="space-around" p={4} fontWeight={"extrabold"}>
            <Link href="/">
                <Image src="./favicon.png" h="12" w="12"></Image>
            </Link>
            {isSmallScreen ? (
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => router.push("/")}>Home</MenuItem>
                        <MenuItem onClick={() => router.push("/about")}>About</MenuItem>
                        <MenuItem onClick={() => router.push("/profile")}>Profile</MenuItem>
                        {auth.user ? (
                            <>
                                <MenuItem onClick={() => router.push("/profile")}>Account</MenuItem>
                                <MenuItem onClick={() => router.push("/logout")}>Log Out</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => router.push("/login")}>Login</MenuItem>
                                <MenuItem onClick={() => router.push("/signup")}>Signin</MenuItem>
                            </>
                        )
                        }
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/profile">Profile</Link>
                </>
            )}
            <IconButton onClick={toggleColorMode} icon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
            {!isSmallScreen &&
                <Box>
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
                            {/* { !isSmallScreen && (
                                <Link href="/profile">
                                <Box mr={2}>{auth.user.email}</Box>
                                </Link>
                            )} */}
                            <Button onClick={() => auth.signOut()}>Sign Out</Button>
                        </Flex>
                    ) : (
                        <Flex gap={'12'}>
                            <Button onClick={() => router.push("/login")}>
                                Login
                            </Button>
                            <Button onClick={() => router.push("/signup")}>
                                Signup
                            </Button>
                        </Flex>
                    )}
                </Box>
            }
        </Flex>
    );
}
