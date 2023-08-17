'use client'
import PomodoroTimer from '@/components/Pomodoro';
import TodoList from '@/components/ToDo';
import Notes from '@/components/Notes';
import Summarizer from '@/components/Summarizer';


export default function Home() {

  return (
    <>
      <PomodoroTimer />
      <Summarizer />
      <TodoList />
      <Notes />
    </>
  );
}
