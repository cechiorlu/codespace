import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { InputField } from '../components/InputField';


interface loginProps {

}

export const login: React.FC<loginProps> = ({ }) => {
    return (
        <Flex
            height='100vh'
            width='80%'
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bgColor='white'
            mx='auto'
        >
            <Flex
                width='100%'
                justifyContent='flex-start'
                alignItems='center'
            >
                <Text> Logo </Text>
                <Flex width='300px' alignItems='center' justifyContent='flex-start'>
                    <Text>Don't have an account?</Text>
                    <Link>Sign Up</Link>
                </Flex>
            </Flex>
            <Flex
                width='100%'
            >
                <Box>
                    <Text textStyle='h1'>Welcome back to your dashboard</Text>
                    <Text textStyle=''>
                        hello
                    </Text>

                    <Box>
                        <Formik initialValues={{ email: "", password: "" }}
                            onSubmit={async ({ email, password }) => {
                                console.log(password, email)
                            }}

                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <InputField
                                        name="email"
                                        placeholder="Enter email address"
                                        label="Email"
                                        type="email"
                                    />
                                    <Box mt={4}>
                                        <InputField name="password"
                                            placeholder="Enter password"
                                            label="Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Flex mt={2}>
                                        <Text>Can't remember your password? </Text>
                                        <Link>Reset Password</Link>
                                    </Flex>

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
                                        LOG IN
                                    </Button>

                                </Form>
                            )}
                        </ Formik>
                    </Box>
                </Box>

                <Image src='' />

            </Flex>
        </Flex>

    );
}

export default login