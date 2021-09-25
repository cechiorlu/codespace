import React from 'react';
import {
    Flex, Box, Text, Image, Button, Link,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { BellIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { Sidebar } from '../../components/Sidebar'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'
import { SelectField } from '../../components/SelectField'
import { InputField } from '../../components/InputField'
import FunctionSignature from '../../components/FunctionSignature'
import InitialCode from '../../components/InitialCode';
import TestCases from '../../components/TestCases'
import VerificationCode from '../../components/VerificationCode'

interface addTestProps {

}

export const addTest: React.FC<addTestProps> = ({ }) => {
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
                    <BellIcon />
                </Flex>

                <Flex>
                    <Flex direction="column">
                        <Box>
                            <Text> Test </Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column">
                        <Text>
                            Creating a Test
                        </Text>
                        <Box>
                            <Tabs>
                                <TabList>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Function Signature
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Initial Code
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Test Cases
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Verification Code
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <FunctionSignature />
                                    </TabPanel>
                                    <TabPanel>
                                        <InitialCode />
                                    </TabPanel>
                                    <TabPanel>
                                        <TestCases/>
                                    </TabPanel>
                                    <TabPanel>
                                        <VerificationCode/>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default addTest