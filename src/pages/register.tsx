import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select, MdArrowDropDown } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { InputField } from '../components/InputField';
import {  } from '@chakra-ui/icons'

interface signupProps {

}

export const signup: React.FC<signupProps> = ({ }) => {
    return (
        <Flex
            height='100vh'
            width='80%'
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bgColor='white'
        >
            <Flex
                width='100%'
                justifyContent='flex-start'
                alignItems='center'
            >
                <Text> Logo </Text>
                <Flex width='300px' alignItems='center' justifyContent='flex-start'>
                    <Text>Already have an account?</Text>
                    <Link>Sign Up</Link>
                </Flex>
            </Flex>
            <Flex
                width='100%'
            >
                <Box>
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
                                    <InputField
                                        name="name"
                                        placeholder="Enter full name"
                                        label="Full name"
                                    />
                                    <Box mt={4}>
                                        <InputField name="email"
                                            placeholder="Enter email address"
                                            label="Email"
                                        />
                                    </Box>
                                    <Box mt={4}>
                                        <Select icon={<MdArrowDropDown />} placeholder="Woohoo! A new icon" />
                                        <InputField
                                            name="password"
                                            placeholder="Password"
                                            label="password"
                                            type="Role"
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
                                        SIGN UP FOR FREE
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

export default signup