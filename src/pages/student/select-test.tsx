import React from 'react';
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import { BellIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { Sidebar } from '../../components/Sidebar'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'
import { SelectField } from '../../components/SelectField'

interface selectTestProps {

}

export const selectTest: React.FC<selectTestProps> = ({ }) => {
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
                            <Text> Take Test </Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column">
                        <Text>
                            Select your stack and language
                        </Text>
                        <Box>
                            <Formik initialValues={{ stack: "", language: "", difficulty: "" }}
                                onSubmit={async ({ stack, language, difficulty }) => {
                                    console.log(stack, language, difficulty)
                                }}

                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <SelectField name="class"
                                            placeholder="Select class"
                                            label="Class"
                                            options={['EEG501', 'EEG502']}
                                        />
                                        <Box mt={4}>
                                            <SelectField name="language"
                                                placeholder="Select language"
                                                label="Language"
                                                options={['Javascript', 'Python', 'Golang', 'Java', 'C++']}
                                            />
                                        </Box>
                                        <Box mt={4}>
                                            <SelectField name="role"
                                                placeholder="Select role"
                                                label="Role"
                                                options={['Student', 'Teacher']}
                                            />
                                        </Box>

                                        <Button
                                            mt={4}
                                            type="submit"
                                            isLoading={isSubmitting}
                                            style={{
                                                width: '240px',
                                                backgroundColor: '#276649',
                                                textAlign: 'center'
                                            }}
                                        >
                                            TAKE TEST
                                        </Button>

                                    </Form>
                                )}
                            </ Formik>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default selectTest