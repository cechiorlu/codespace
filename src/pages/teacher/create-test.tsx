import React, { useState } from 'react';
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'
import { SelectField } from '../../components/SelectField'
import { InputField } from '../../components/InputField'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTest } from "../../features/Slices/testSlice";



interface createTestProps {

}

export const createTest: React.FC<createTestProps> = ({ }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.username)
    const tests = useAppSelector(state => state.test.tests)
    const [language, setLanguage] = useState('javascript')
    const [difficulty, setDifficulty] = useState('')

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
                    <Link href="">
                        <Image src="/images/Bellicon.png" w="18px" h="21.6px" />
                    </Link>
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
                        <Box>
                            <Text> Courses </Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>

                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="40px"
                        justifyContent="flex-start"
                    >
                        <Text>
                            Creating a Test
                        </Text>
                        <Box w="500px" mt={6}>
                            <Formik initialValues={{ title: "" }}
                                onSubmit={async ({ title }) => {
                                    router.push('/teacher/course/add-test')
                                    dispatch(setTest({
                                        title,
                                        language,
                                        difficulty,
                                        user
                                    }))
                                }}

                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <InputField
                                            name="title"
                                            placeholder="Enter test title"
                                            label="Test Title"
                                            type="text"
                                            required
                                        />
                                        <Box mt={4}>
                                            <SelectField name="language"
                                                value={language}
                                                placeholder="Select language"
                                                label="Language"
                                                options={["python", "javascript", "go", "java", "cpp", "php", "sql"]}
                                                onChange={(e) => setLanguage(e.target.value)}
                                            />
                                        </Box>
                                        <Box mt={4}>
                                            <SelectField name="difficulty"
                                                value={difficulty}
                                                placeholder="Difficulty"
                                                label="Difficulty"
                                                options={['easy', 'intermediate', 'hard']}
                                                onChange={(e) => setDifficulty(e.target.value)}
                                            />
                                        </Box>

                                        <Button
                                            mt={4}
                                            type="submit"
                                            isLoading={isSubmitting}
                                            width="240px"
                                        >
                                            Create Test
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

export default createTest