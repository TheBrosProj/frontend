// pages/index.jsx
'use client'
import { AbsoluteCenter, Text, Box, Center } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/Carousel';
import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import LoadPage from '@/components/LoadPage';
import PomodoroTimer from '@/components/Pomodoro';
import TodoList from '@/components/ToDo';
import Notes from '@/components/Notes';


export default function Home() {
  return (
    <>
      <LoadPage>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Notes></Notes>
          {/* <ImageCarousel></ImageCarousel> */}
          {/* <PomodoroTimer
            timerDuration={25}
            shortBreakDuration={5}
            longBreakDuration={15}
            bg="tomato"
            p={4}
            color="white"
          /> */}
          {/* <TodoList></TodoList> */}
          {/* <Box maxW="md" mx="auto" mt={8} p={4}>
              <h1>Welcome to the Homepage!</h1>
              <p>Content of your homepage goes here.</p>
            </Box> */}
          <Footer />
        </Box>
      </LoadPage>
    </>
  );
}
