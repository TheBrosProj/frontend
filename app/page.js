// pages/index.jsx
'use client'
import PomodoroTimer from '@/components/Pomodoro';
import TodoList from '@/components/ToDo';
import Notes from '@/components/Notes';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Summarizer from '@/components/Summarizer';


export default function Home() {
  return (
    <>
      <PomodoroTimer />
      <Summarizer></Summarizer>
      <TodoList></TodoList>
      <Notes></Notes>
    </>
  );
}
