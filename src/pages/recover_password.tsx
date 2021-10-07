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
                mt="30px"
            >
                <Text> Logo </Text>
                <Text>Don't have an account? <Link>Sign Up</Link></Text>
            </Flex>

            <Box
                width="500px"
                m='auto'
                textAlign='center'
            >
                <Text textStyle='h1'>Recover your password</Text>
                <Text textStyle=''>
                    Provide the email address used to register your account
                </Text>

                <Box w="100%">
                    <Formik initialValues={{ email: "" }}
                        onSubmit={async ({ email }) => {
                            console.log(email)
                        }}

                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Box mt={5}>
                                    <InputField name="email"
                                        placeholder="Enter email address"
                                        label="Email"
                                        type="email"
                                    />
                                </Box>

                                {/* <Button
                                    mt={3}
                                    type="submit"
                                    isLoading={isSubmitting}
                                    w="100px"
                                    ml='auto'
                                >
                                    Done
                                </Button> */}

                            </Form>
                        )}
                    </ Formik>
                </Box>
                <Box mt={12}>
                    <Text>Wrong Email address? Go Back</Text>
                </Box>
            </Box>
        </Flex >

    );
}

export default recoverPassword