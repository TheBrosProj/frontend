import React, { useEffect, useState } from "react";
import {
    Text,
    Box,
    Center,
    Editable,
    EditablePreview,
    EditableInput,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        async function fetchTodos() {
            const response = await fetch('/todo');
            if (response.ok) {
                const todosData = await response.json();
                setTodos(todosData);
            }
        }

        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        if (input) {
            const response = await fetch('/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: input }),
            });

            if (response.ok) {
                const newTodo = await response.json();
                setTodos([...todos, newTodo]);
                setInput('');
            }
        }
    };

    const handleDelete = async (todo) => {
        const response = await fetch('/todo', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: todo.id }),
        });

        if (response.ok) {
            setTodos([...todos.filter((t) => t.id !== todo.id)]);
        }
    };

    const handleCompletion = async (todo) => {
        const response = await fetch('/todo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: todo.id, state: 'completed' }),
        });

        if (response.ok) {
            setTodos([...todos.filter(t => t["data"] !== todo["data"]), { "data": todo["data"], "state": "completed", "time": moment.now() }])
        }
    };


    const handleRevive = async (todo) => {
        const response = await fetch('/todo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: todo.id, state: 'active' }),
        });

        if (response.ok) {
            setTodos([...todos.filter(t => t["data"] !== todo["data"]), { "data": todo["data"], "state": "active", "time": moment.now() }])
        }
    };
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
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleAddTodo
                            }
                        }}
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
