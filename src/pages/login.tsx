import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { InputField } from '../components/InputField';
import { useRouter } from 'next/router'



interface loginProps {

}

export const login: React.FC<loginProps> = ({ }) => {
    const router = useRouter()

    return (
        <Flex
            height='100vh'
            width='85%'
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bgColor='white'
            mx='auto'
        >
            <Flex
                width='100%'
                justifyContent='space-between'
                alignItems='center'
                pt="30px"
            >
                <Text> Logo </Text>
                <Text>Don't have an account?  <Link href="/register">Sign Up</Link></Text>
            </Flex>
            <Flex
                width='100%'
                justifyContent="space-between"
                height='366px'
                my='auto'
                alignItems='center'
            >
                <Box width='400px' >
                    <Text textStyle='h1'>Welcome back to your dashboard</Text>
                    <Text textStyle=''>
                        hello
                    </Text>

                    <Box>
                        <Formik initialValues={{ email: "", password: "" }}
                            onSubmit={async ({ email, password }) => {
                                // router.push(role === 'student' ? '/student' : '/teacher')
                                router.push('/teacher')
                            }}

                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box mt={6}>
                                        <InputField
                                            name="email"
                                            placeholder="Enter email address"
                                            label="Email"
                                            type="email"
                                        />
                                    </Box>
                                    <Box mt={4}>
                                        <InputField name="password"
                                            placeholder="Enter password"
                                            label="Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Text textStyle="" mt={2}>Can't remember your password? <Link>Reset Password</Link></Text>


                                    <Button
                                        mt={4}
                                        type="submit"
                                        isLoading={isSubmitting}
                                        w="280px"
                                    >
                                        LOG IN
                                    </Button>

                                </Form>
                            )}
                        </ Formik>
                    </Box>
                </Box>

                <Image src='/images/pull-request.png' width="460px" height="295px" />

            </Flex>
        </Flex>

    );
}

export default login