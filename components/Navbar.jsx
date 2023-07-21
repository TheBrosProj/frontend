import { Box, Text, Flex, Link, Avatar, Button, Image, Grid, Menu, MenuButton, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';


export default function Navbar() {
    const auth = useAuth();
    const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
    return (
        <Flex as="nav" align="center" justify="space-between" p={4} fontWeight={"extrabold"}>
            <Link href="/">
                <Image src="./favicon.png" h="12" w="12"></Image>
            </Link>
            {isSmallScreen ? (
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem><Link href="/">Home</Link></MenuItem>
                        <MenuItem><Link href="/about">About</Link></MenuItem>
                        <MenuItem><Link href="/profile">Profile</Link></MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/profile">Profile</Link>
                </>
            )}
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
                    <Flex>
                        <Link p="4" href="/login">
                            Login
                        </Link>
                        <Link p="4" href="/signup">
                            Sign Up
                        </Link>
                    </Flex>
                )}
            </Box>
        </Flex>
    );
}
