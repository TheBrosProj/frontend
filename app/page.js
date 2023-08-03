// pages/index.jsx
'use client'
import { AbsoluteCenter, Text, Box, Center, Grid, GridItem } from '@chakra-ui/react';
import ImageCarousel from '@/components/Carousel';
import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import PomodoroTimer from '@/components/Pomodoro';
import TodoList from '@/components/ToDo';
import Notes from '@/components/Notes';


export default function Home() {
  return (
    <>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <PomodoroTimer />
          <TodoList></TodoList>
          <Notes></Notes>
        </Box>
    </>
  );
}
