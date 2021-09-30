import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { InputField } from '../../components/InputField';
import { SelectField } from '../../components/SelectField'


interface signupProps {

}

export const signup: React.FC<signupProps> = ({ }) => {
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
                mt='30px'
                alignItems='center'
            >
                <Text> Logo </Text>
                <Text>Already have an account? <Link>Log In</Link></Text>

            </Flex>
            <Flex
                width='100%'
                justifyContent="space-between"
                height='366px'
                my='auto'
                alignItems='center'
            >
                <Box w="400px">
                    <Text textStyle='h1'>Begin your coding journey</Text>
                    <Text textStyle=''>
                        Let's start by choosing your role
                    </Text>

                    <Box>
                        <Formik initialValues={{ email: "", name: "", role: "" }}
                            onSubmit={async ({ email, name, role }) => {
                                console.log(name, email, role)
                            }}

                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box mt={6}>
                                        <InputField
                                            name="name"
                                            placeholder="Enter full name"
                                            label="Full name"
                                        />
                                    </Box>
                                    <Box mt={4}>
                                        <InputField name="email"
                                            placeholder="Enter email address"
                                            label="Email"
                                            type="email"
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
                                        w='280px'
                                    >
                                        SIGN UP FOR FREE
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

export default signup