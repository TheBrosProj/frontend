'use client'
import React, { useState } from "react";
import {
    Text,
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
import { CheckIcon, EditIcon, DeleteIcon,RepeatIcon } from "@chakra-ui/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const handleAddTodo = () => {
        if (input) {
            setTodos([...todos, { "data": input, "state": "active" , "time" : moment.now() }]);
            setInput("");
        }
        console.log(todos);
    };

    const handleDelete = (todo) => {
        setTodos([...todos.filter((t) => t["data"] !== todo["data"] )]);
    };

    const handleCompletion = (todo) => {
        setTodos([...todos.filter(t => t["data"] !== todo["data"]), { "data": todo["data"], "state": "completed", "time": moment.now() }])
    }

    const handleRevive = (todo) => {
        setTodos([...todos.filter(t => t["data"] !== todo["data"]), { "data": todo["data"], "state": "active", "time": moment.now() }])
    }
    return (
        <Center>

            <Box
                p="2"
                m="2"
                w={'3xl'}
                border="1px solid gray"
                borderRadius="md"
                boxShadow='lg'
                overflowY="auto"
            >
                <InputGroup
                    p={'4'} marginBottom={'2'}
                >
                    <Input
                        placeholder="Enter a new task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onSubmit={handleAddTodo}
                    />
                    <InputRightElement>
                        <IconButton
                            // size={'sm'}
                            aria-label="Add todo"
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            onClick={handleAddTodo}
                        />
                    </InputRightElement>
                </InputGroup>
                <Box colorScheme="gray" mt="4">
                    {todos
                        .filter(todo => todo["state"] === 'active')
                        .map((todo) => (
                            <Flex
                                key={todo["data"]} align="center" m="2" p="2" justify="space-between"
                                // border={'1px solid gray'} 
                                borderRadius={'md'}
                                boxShadow={'md'}
                            >
                                <Editable defaultValue={todo["data"]} fontWeight={"bold"}>
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                                <Flex>
                                    <IconButton
                                        aria-label="Complete todo"
                                        icon={<CheckIcon />}
                                        onClick={() => handleCompletion(todo)}
                                    />
                                    <IconButton
                                        aria-label="Delete todo"
                                        icon={<DeleteIcon />}
                                        ml="2"
                                        onClick={() => handleDelete(todo)}
                                    />
                                </Flex>
                            </Flex>
                        ))}
                    {todos
                        .filter((t) => t["state"] === "completed")
                        .map((todo) => (
                            <Flex
                                key={todo["data"]} align="center" m="2" p="2" paddingX="2" justify="space-between"
                                // border={'1px solid gray'} 
                                borderRadius={'md'}
                                boxShadow={'md'}
                            >
                                <Text as="s" fontWeight={"bold"}>{todo["data"]}</Text>
                                <Flex>
                                    <IconButton
                                        aria-label="Revive todo"
                                        icon={<RepeatIcon />}
                                        onClick={() => handleRevive(todo)}
                                    />
                                    <IconButton
                                        aria-label="Delete todo"
                                        icon={<DeleteIcon />}
                                        ml="2"
                                        onClick={() => handleDelete(todo)}
                                    />
                                </Flex>
                                {/* <Editable isDisabled defaultValue={todo["data"]} fontWeight={"bold"} >
                                    <EditablePreview />
                                    <EditableInput disabled />
                                </Editable> */}
                            </Flex>
                        ))}
                </Box>
            </Box>
        </Center>
    );
};

export default TodoList;
