import React, { useState } from "react";
import {
    Box,
    Center,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Grid,
    GridItem,
    SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomEditable } from "./CustomEditable";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState("");

    const handleAddNote = () => {
        if (input) {
            setNotes([...notes, input]);
            setInput("");
        }
    };

    const handleDeleteNote = (note) => {
        setNotes(notes.filter((t) => t !== note));
    };

    return (
        <Center>
            <Box
                p="2"
                m="2"
                w='3xl'
                border="1px solid gray"
                borderRadius="md"
                boxShadow='lg'
                overflowY="auto"
            >
                <InputGroup p={'2'} marginBottom={'2'}>
                    <Input
                        placeholder="Enter a new note"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        handleSubmit={handleAddNote}
                        h={'24'}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Add Notes"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            onClick={handleAddNote}
                        />
                    </InputRightElement>
                </InputGroup>
                <SimpleGrid minChildWidth='xs' spacing='4' p={'2'}>
                    {notes.map((note) => (
                        // <Flex key={note} align="center" m="2">
                        <Box key={note} 
                        // border={'1px solid gray'} 
                        boxShadow={'md'} 
                        borderRadius={'md'}>
                            <CustomEditable  content={note} handleDelete={() => {handleDeleteNote(note)}}></CustomEditable>
                        </Box>
                        // </Flex>
                    ))}
                </SimpleGrid>
            </Box>
        </Center>
    );
};

export default Notes;
