// pages/login.jsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    useToast,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';
import { auth } from '@/lib/firebase';
import DomCheck from '@/components/DomCheck';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            router.push('/profile'); // Redirect to dashboard on successful login
        } catch (error) {
                toast({
                  title: `${error.message}`,
                  status: 'error',
                  isClosable: true,
                })
            // console.log('Login error:', error);
        }
    };

    return (
        <ChakraProvider>
            <Box maxW="sm" mx="auto" mt={8} p={4}>
                <Heading mb={4}>Login</Heading>
                <form onSubmit={handleLogin}>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="gray" mb={4}>
                        Log In
                    </Button>
                </form>
            </Box>
        </ChakraProvider>

    );
}
