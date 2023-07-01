import React, { useState } from "react";
import {
    Box,
    Center,
    Checkbox,
    CheckboxGroup,
    Editable,
    EditablePreview,
    EditableInput,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTodo = () => {
        if (input) {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    const handleDeleteTodo = (todo) => {
        setTodos(todos.filter((t) => t !== todo));
    };

    return (
        <Center>

            <Box
                w="80vw"
                h="40vh"
                p="4"
                border="1px solid gray"
                borderRadius="md"
                overflowY="auto"
            >
                <InputGroup>
                    <Input
                        placeholder="Enter a new task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Add todo"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            onClick={handleAddTodo}
                        />
                    </InputRightElement>
                </InputGroup>
                <CheckboxGroup colorScheme="gray" mt="4">
                    {todos.map((todo) => (
                        <Flex key={todo} align="center" m="2" justify="space-between">
                            <Editable defaultValue={todo} fontWeight={"bold"}>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                            <Flex>
                                <IconButton
                                    aria-label="Complete todo"
                                    icon={<CheckIcon />}
                                    onClick={() => handleDeleteTodo(todo)}
                                />
                                <IconButton
                                    aria-label="Delete todo"
                                    icon={<DeleteIcon />}
                                    ml="2"
                                    onClick={() => handleDeleteTodo(todo)}
                                />
                            </Flex>
                        </Flex>
                    ))}
                </CheckboxGroup>
            </Box>
        </Center>
    );
};

export default TodoList;
