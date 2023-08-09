// pages/index.jsx
'use client'
import { Box } from '@chakra-ui/react';
import Summarizer from '@/components/Summarizer';


export default function Summarize() {
  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Summarizer></Summarizer>
      </Box>
    </>
  );
}
