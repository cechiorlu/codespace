import React from 'react';
import { Flex, Box, Text, Button, Tag, ListItem, Image, UnorderedList, Code, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import { SubmitCode } from "../../components/Modals";
import { useRouter } from 'next/router'
import StopTimer from '../../components/StopTimer'
import CodeEditor from '../../components/CodeEditor'
import Compiler from '../../components/Compiler'; '../../components/Compiler'

interface testProps {

}

export const test: React.FC<testProps> = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

    const code = '// Insert code here';



    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                height='100vh'
                width='100%'
                direction="column"
                justifyContent="flex-start"
                bgColor='white'
                pb="20px"
            >
                <Flex width='100%'
                    justifyContent='space-between'
                    py="20px"
                    px="20px"
                    alignItems="center"
                    borderBottom="2px solid #F0F0F0"
                >
                    <Button variant='link' onClick={() => router.back()}>
                        <Image src="/images/arrow-left.png" w="13px" h="12px" mr={2} /> Go back
                    </Button>
                    <Flex w="180px">
                        <Text>Time Remaining  :  <StopTimer initialTime={60 * 60 * 2500} /></Text>
                    </Flex>
                </Flex>

                <Flex justifyContent="space-between" mr="15px">
                    {/* left menu */}
                    <Flex direction="column"
                        bgColor="stroke"
                        width="30%"
                        minHeight="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Flex justifyContent="space-between" alignItems="center" mb={4}>
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
                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="40px"
                        justifyContent="flex-start"
                    >
                        <SubmitCode isOpen={isOpen} onClose={onClose} />
                        <Box bgColor="white">
                            <Box w="100%">
                                <Compiler />
                                {/* <CodeEditor height="400px"/> */}
                            </Box>
                            <Flex alignItems="center" justifyContent="space-between" mt={4}>
                                <Flex>
                                    <Text pr={2}>Test Created by: </Text>
                                    <Text> Prof. Adeyemi </Text>
                                </Flex>
                                <Button onClick={onOpen}>Submit code</Button>

                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex >
    );
}

export default test