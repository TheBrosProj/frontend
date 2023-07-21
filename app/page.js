// pages/index.jsx
'use client'
import { AbsoluteCenter, Text, Box, Center, Grid, GridItem } from '@chakra-ui/react';
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
          <PomodoroTimer />
          <TodoList></TodoList>
          <Notes></Notes>
        </Box>
      </LoadPage>
    </>
  );
}
