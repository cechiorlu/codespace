import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
// import { InputField } from './InputField';
import CodeEditor from './CodeEditor'
import { useAppSelector } from "../app/hooks";
import { setLanguageValue } from "../features/Slices/languageSlice";


interface CompilerProps {

}

export const Compiler: React.FC<CompilerProps> = ({ }) => {

    const input = useAppSelector(state => state.codeSolution.code)

    // const [input, setInput] = useState(``)
    const [output, setOutput] = useState('')
    const languageId = useAppSelector(state => state.language.value)
    const [userInput, setUserInput] = useState('')

    // useEffect(() => {
    //     setInput(localStorage.getItem('input') || '')
    //     setLanguageId(parseInt(localStorage.getItem('languageId')) || 2)
    // }, [input, languageId]);


    // const handleInputChange = (e) => {
    //     e.preventDefault();
    //     setInput(e.target.value);
    //     localStorage.setItem('input', e.target.value)
    // }

    const handleUserInputChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    };


    const submitRequest = async (e) => {
        e.preventDefault();
        let outputText = document.getElementById("output");
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        const response = await fetch(
            "https://judge0-ce.p.rapidapi.com/submissions",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": 'bf0f3a0e24msh7a589c0a8a76440p1144efjsnfd1615752d1b',
                    "content-type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify({
                    source_code: input,
                    stdin: userInput,
                    language_id: languageId,
                }),
            }
        );

        outputText.innerHTML += "Submission Created ...\n";
        const jsonResponse = await response.json();
        let jsonGetSolution = {
            status: { description: "Queue" },
            stderr: null,
            compile_output: null,
        };
        while (
            jsonGetSolution.status.description !== "Accepted" &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {
            outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
            if (jsonResponse.token) {
                let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
                const getSolution = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                        "x-rapidapi-key": 'bf0f3a0e24msh7a589c0a8a76440p1144efjsnfd1615752d1b',
                        "content-type": "application/json",
                    },
                });
                jsonGetSolution = await getSolution.json();
            }
        }

        // @ts-ignore
        if (jsonGetSolution.stdout) {
            // @ts-ignore
            const output = atob(jsonGetSolution.stdout);
            outputText.innerHTML = "";
            // @ts-ignore
            outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr);
            outputText.innerHTML = "";
            outputText.innerHTML += `\n Error :${error}`;
        } else {
            const compilation_error = atob(jsonGetSolution.compile_output);
            outputText.innerHTML = "";
            outputText.innerHTML += `\n Error :${compilation_error}`;
        }
    };


    return (
        <Flex direction="column" width="100%" h="600px" justifyContent="flex-start" pos="relative">
            <CodeEditor height={"370px"} />
            <Button
                mt={2}
                ml="auto"
                type="submit"
                onClick={submitRequest}
                w="100px"
                pos="absolute"
                right="15px"
                top="390px"
                zIndex="10000"
                style={{ transform: "translateY(-20px)" }}
                variant='ghost'>
                Run code
            </Button>

            <Flex justifyContent="space-between" w="97%" h="200px" mt={2} mr="auto">
                <Box h="150px" w="45.6%">
                    <Text>Input</Text>
                    <textarea
                        id="User Input"
                        onChange={handleUserInputChange}
                        style={{
                            background: "#F0F0F0",
                            width: "100%",
                            height: "150px",
                            resize: "vertical"
                        }}
                    >
                    </textarea>
                </Box>
                <Box width="50%" h="150px">
                    <Text>Output</Text>
                    <textarea
                        id="output"
                        style={{
                            background: "#F0F0F0",
                            width: "100%",
                            height: "150px",
                            position: "fixed",
                            resize: "none"
                        }}>
                    </textarea>
                </Box>

            </Flex>
        </ Flex >
    );
}

export default Compiler