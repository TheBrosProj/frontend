// pages/signup.jsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ChakraProvider,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';
import { auth } from '@/lib/firebase';

export default function Signup() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            router.push('/profile'); // Redirect to dashboard on successful signup
        } catch (error) {
            console.log('Signup error:', error);
            // Handle signup error
        }
    };

    return (
        <ChakraProvider>
            <Box maxW="sm" mx="auto" mt={8} p={4}>
                <Heading mb={4}>Signup</Heading>
                <form onSubmit={handleSignup}>
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
                    <Button type="submit" colorScheme="blue" mb={4}>
                        Sign Up
                    </Button>
                </form>
            </Box>
        </ChakraProvider>
    );
}
