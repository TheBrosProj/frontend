// pages/index.jsx
'use client'
import PomodoroTimer from '@/components/Pomodoro';
import TodoList from '@/components/ToDo';
import Notes from '@/components/Notes';
import { Box } from '@chakra-ui/react';


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
