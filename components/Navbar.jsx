import { Box, Text, Flex, Link, Avatar, Button, Image, Grid, Menu, MenuButton, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
    const auth = useAuth();
    const [isSmallScreen] = useMediaQuery("(max-width: 600px)");
    return (
        <Flex as="nav" align="center" justify="space-between" p={4} fontWeight={"extrabold"}>
            <Link href="/">
                <Image src="./favicon.png" height="5vh" width="5vh"></Image>
            </Link>
            {isSmallScreen ? (
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem><Link>Home</Link></MenuItem>
                        <MenuItem><Link>About</Link></MenuItem>
                        <MenuItem><Link>Contact</Link></MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </>
            )}
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
                            { !isSmallScreen && (
                            <Link href="/profile">
                        <Box mr={2}>{auth.user.email}</Box>
                            </Link>
                            )}
                    <Button onClick={() => auth.signOut()}>Sign Out</Button>
                </Flex>
            ) : (
                <Flex>
                    <Link href="/login">
                        <Button mr={4}>Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button >Sign Up</Button>
                    </Link>
                </Flex>
            )}
        </Flex>
    );
}
