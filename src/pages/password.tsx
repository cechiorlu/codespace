import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import { InputField } from '../components/InputField';


interface passwordProps {

}

export const password: React.FC<passwordProps> = ({ }) => {
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
                                    <InputField
                                        name="password"
                                        placeholder="Enter password"
                                        label="Password"
                                        type="password"
                                    />
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

                <Image src='' />

            </Flex>


        </Flex>

    );
}

export default password