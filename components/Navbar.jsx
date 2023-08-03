'use client'
import { Box, Flex, Avatar, Button, Image, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, useColorMode, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlay, faSun } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode()
    const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
    console.log(auth);
    return (
        <Flex as="nav" align="center" justify="space-around" p={4} fontWeight={"extrabold"}>
            <Link href="/">
                <Image aria-label='N logo' src="./favicon.png" h="12" w="12"></Image>
            </Link>
            {isSmallScreen ? (
                <Menu>
                    <MenuButton aria-label='menu open button' as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem aria-label='about' onClick={() => router.push("/about")}>About</MenuItem>
                        <MenuItem aria-label='profile' onClick={() => router.push("/profile")}>Profile</MenuItem>
                        <MenuItem aria-label='home' onClick={() => router.push("/")}>Home</MenuItem>
                        {auth.currentUser ? (
                            <>
                                <MenuItem aria-label='profile' onClick={() => router.push("/profile")}>Account</MenuItem>
                                <MenuItem aria-label='log out' onClick={() => router.push("/logout")}>Log Out</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem aria-label='login' onClick={() => router.push("/login")}>Login</MenuItem>
                                <MenuItem aria-label='login' onClick={() => router.push("/signup")}>Signin</MenuItem>
                            </>
                        )
                        }
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Link aria-label='home' href="/">Home</Link>
                    <Link aria-label='about' href="/about">About</Link>
                    <Link aria-label='profile' href="/profile">Profile</Link>
                </>
            )}
            <IconButton aria-label='toggle color theme' onClick={toggleColorMode} icon={<FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun} />}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
            {!isSmallScreen &&
                <Box>
                    {auth.user ? (
                        <Flex align="center">
                            <Link aria-label='profile' href="/profile">
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
                            <Button aria-label='log out' onClick={() => auth.signOut()}>Log Out</Button>
                        </Flex>
                    ) : (
                        <Flex w={'20vw'} justify={'space-evenly'} gap={'2'}>
                            <Button aria-label='log in' onClick={() => router.push("/login")}>
                                Login
                            </Button>
                            <Button aria-label='sign up' onClick={() => router.push("/signup")}>
                                Signup
                            </Button>
                        </Flex>
                    )}
                </Box>
            }
        </Flex>
    );
}
