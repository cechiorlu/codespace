import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { InputField } from '../../components/InputField';


interface passwordProps {

}

export const password: React.FC<passwordProps> = ({ }) => {
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
            <Flex
                width='100%'
                justifyContent="space-between"
                height='366px'
                my='auto'
                alignItems='center'
            >
                <Box w="400px">
                    <Text textStyle='h1'>X</Text>
                    <Text textStyle=''>
                        Secure your account from malicious cases
                    </Text>

                    <Box>
                        <Formik initialValues={{ password: "", confirm: "" }}
                            onSubmit={async ({ password }) => {
                                console.log(password)
                            }}

                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box mt={4}>
                                        <InputField
                                            name="password"
                                            placeholder="Enter password"
                                            label="Password"
                                            type="password"
                                        />
                                    </Box>
                                    <Box mt={4}>
                                        <InputField name="confirm"
                                            placeholder="Confirm Password"
                                            label="Confirm password"
                                            type="password"
                                        />
                                    </Box>
                                    <Button
                                        mt={4}
                                        type="submit"
                                        isLoading={isSubmitting}
                                        w="240px"
                                    >
                                        Done
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

export default password