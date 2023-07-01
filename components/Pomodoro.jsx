import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Input, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faEdit } from '@fortawesome/free-solid-svg-icons';

const PomodoroTimer = () => {
    const [duration, setDuration] = useState(25);
    const [timeLeft, setTimeLeft] = useState(duration * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const intervalId = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [isRunning]);

    useEffect(() => {
        if (timeLeft === 0) {
            setIsRunning(false);
            // play chime sound here
        }
    }, [timeLeft]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setTimeLeft(duration * 60);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setIsRunning(false);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
        setTimeLeft(event.target.value * 60);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <Box>
            <Center>
                <Stack direction="row" spacing={4}>
                    <Button onClick={handleStart} leftIcon={<FontAwesomeIcon icon={faPlay} />}>
                        Start
                    </Button>
                    <Button onClick={handlePause} leftIcon={<FontAwesomeIcon icon={faPause} />}>
                        Pause
                    </Button>
                    <Button onClick={handleStop} leftIcon={<FontAwesomeIcon icon={faStop} />}>
                        Stop
                    </Button>
                    <Button onClick={handleEdit} leftIcon={<FontAwesomeIcon icon={faEdit} />}>
                        Edit
                    </Button>
                </Stack>
            </Center>
            <Center>

                {isEditing ? (
                    <Input
                        fontSize={"4xl"}
                        m={4}
                        value={duration}
                        onChange={handleDurationChange}
                        onBlur={() => setIsEditing(false)}
                        autoFocus
                    />
                ) : (
                    <>
                        <Text fontSize="4xl" mt={4}>
                            {formatTime(timeLeft)}
                        </Text>
                    </>
                    // <Text fontSize="xl" mb={4} onClick={handleEdit}>
                    //   Duration: {duration} minutes
                    // </Text>
                )}
            </Center>
        </Box>
    );
};

export default PomodoroTimer;
