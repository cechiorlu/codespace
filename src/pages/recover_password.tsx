import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { InputField } from '../components/InputField';
interface recoverPasswordProps {

}

export const recoverPassword: React.FC<recoverPasswordProps> = ({ }) => {
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

            <Box>
                <Text textStyle='h1'>Recover your password</Text>
                <Text textStyle=''>
                    Provide the email address used to register your account
                </Text>

                <Box>
                    <Formik initialValues={{ email: "" }}
                        onSubmit={async ({ email }) => {
                            console.log(email)
                        }}

                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <InputField name="email"
                                    placeholder="Enter email address"
                                    label="Email"
                                    type="email"
                                />

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
                                    Done
                                </Button>

                            </Form>
                        )}
                    </ Formik>
                </Box>
            </Box>
        </Flex >

    );
}

export default recoverPassword