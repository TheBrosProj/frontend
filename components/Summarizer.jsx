'use client'
import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Text,
    Textarea,
    Tooltip,
} from "@chakra-ui/react";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Configuration, OpenAIApi } from "openai"; // Import OpenAI classes
// import { getSubtitles } from 'youtube-captions-scraper';
const labelStyles = {
    mt: '4',
    ml: '-1',
    fontSize: 'md',
}



const Summarizer = () => {
    const [input, setInput] = useState("");
    const [summary, setSummary] = useState(""); // State to hold the generated summary
    const [apikey, setApikey] = useState(null); // State to hold the generated summary
    const [word, setWord] = useState(100); // State to hold the generated summary
    const [showTooltip, setShowTooltip] = useState(false)

    const handleSubmit = async () => {

        // Initialize OpenAI configuration and API instance
        const configuration = new Configuration({
            apiKey: apikey,
        });
        const openai = new OpenAIApi(configuration);

        // Call the OpenAI API to generate the summary

        // getSubtitles({
        // videoID: 'mQfnOCHoCNM', // youtube video id
        // lang: 'en' // default: `en`
        // }).then(captions => {
        // console.log(captions);
        // });
        // setSummary(transcript);
        console.log(word);
        console.log(input);
        console.log(apikey);
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-16k",
            messages: [{ role: "system", content: `You are a helpful assistant that summarizes transcript in around ${word} words .` }, { role: "user", content: input }],
        });

        // Extract the generated message from the API response
        const generatedSummary = chatCompletion.data.choices[0].message.content;
        console.log(generatedSummary);

        // Update the state with the generated summary
        setSummary(generatedSummary);
        // console.log(generatedSummary);
    };

    return (
        <>
            <Center>
                <Box
                    p="2"
                    m="2"
                    w={'3xl'}
                    h={'sm'}
                    border="1px solid gray"
                    borderRadius="md"
                    boxShadow='lg'
                    overflowY="auto"
                >


                    <InputGroup
                        p={'4'} marginBottom={'2'}
                    >
                        <Input
                            placeholder="Add openai API"
                            value={apikey}
                            onChange={(e) => { setApikey(e.target.value); }}
                        />
                    </InputGroup>
                    <Center>

                        <Textarea
                            w={'md'}
                            h={'36'}
                            placeholder="Add content to summarize"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onSubmit={handleSubmit}
                        />
                    </Center>
                    {/* <InputRightElement>
                            <IconButton
                                // size={'sm'}
                                aria-label="summarize selection"
                                icon={<FontAwesomeIcon icon={faGears} />}
                                onClick={handleSubmit}
                            />
                        </InputRightElement> */}
                    <Center m={4} pt={4}>
                        <Slider
                            w={'md'}
                            defaultValue={100}
                            min={50}
                            max={150}
                            colorScheme='gray'
                            onChange={(v) => setWord(v)}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                                50
                            </SliderMark>
                            <SliderMark value={100} mt='1' ml='-2.5' fontSize='sm'>
                                100
                            </SliderMark>
                            <SliderMark value={150} mt='1' ml='-2.5' fontSize='sm'>
                                150
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg='gray.700'
                                color='white'
                                placement='top'
                                isOpen={showTooltip}
                                label={`${word} words`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                    </Center>
                    <Center mt={12}>
                        <Button onClick={handleSubmit}>Summarize</Button>
                    </Center>
                </Box>
            </Center>
            {summary &&
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
                        {/* Display the generated summary */}
                        <Text>
                            {summary}
                        </Text>
                    </Box>
                </Center>
            }
        </>
    );
};

export default Summarizer;
