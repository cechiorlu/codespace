import React from 'react';
import { Flex, Box, Text, Button,Tag, ListItem, UnorderedList, Code, useDisclosure } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Sidebar } from '../../components/Sidebar'
import { SubmitCode } from "../../components/Modals";
import { useRouter } from 'next/router'


interface testProps {

}

export const test: React.FC<testProps> = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()


    return (
        <Flex>
            <Sidebar />
            <Flex
                height='100vh'
                width='80%'
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                bgColor='white'
                mx='auto'
            >
                <Flex width='100%' justifyContent='space-between'>
                    <Button variant='link' onClick={() => router.back()}>
                        <ArrowLeftIcon /> Go back
                    </Button>
                    Timer
                </Flex>

                <Flex>
                    <Flex direction="column">
                        <Flex>
                            <Text> Merging Two Sorted Lists </Text>
                            <Tag>Easy</Tag>
                        </Flex>
                        <Text>Given two lists of integers a and b sorted in ascending order, merge them into one large sorted list</Text>
                        <Box>
                            <Text>Constraints</Text>
                            <UnorderedList>
                                <ListItem>
                                    <Box>
                                        <Code>{`0 < n < 200,000`}</Code> where <Code>n</Code> is the height of <Code>a</Code>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Code>{`0 < m < 200,000`}</Code> where <Code>m</Code> is the height of <Code>b</Code>
                                    </Box>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <Text>Example</Text>
                            <Box>
                                <Text>Input</Text>
                                <Box>
                                    <Code>{`a = [5, 10, 15]`}</Code>
                                </Box>
                                <Box>
                                    <Code>{`b = [3, 8, 9]`}</Code>
                                </Box>
                            </Box>

                            <Box>
                                <Text>Output</Text>
                                <Box>
                                    <Code>{`[3, 5, 8, 9, 10, 15]`}</Code>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex direction="column">
                        <SubmitCode isOpen={isOpen} onClose={onClose} />
                        <Box>
                            <Box>
                                {/* codemirror */}
                                codespace
                            </Box>
                            <Flex>
                                <Text>Test Created by: Prof. Adeyemi</Text>
                                <Flex>
                                    <Button variant='ghost'>Run code</Button>
                                    <Button onClick={onOpen}>Submit code</Button>
                                </Flex>
                            </Flex>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>

        </Flex >
    );
}

export default test