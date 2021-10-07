import React from 'react';
import { Flex, Box, Link, Text, Button, Image, Select } from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { InputField } from '../../components/InputField';
import { SelectField } from '../../components/SelectField'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUsername, setRole } from "../../features/Slices/userSlice";





interface signupProps {

}

export const signup: React.FC<signupProps> = ({ }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const role = useAppSelector(state => state.user.role)


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
                            onSubmit={async ({ email, name }) => {
                                dispatch(setUsername(name))
                                role == 'Student' ? router.push('/student') : router.push('/teacher')
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
                                        <SelectField value={role} name="role"
                                            placeholder="Select role"
                                            label="Role"
                                            options={['Student', 'Teacher']}
                                            onChange={(e) => dispatch(setRole(e.target.value))}
                                        />
                                    </Box>

                                    <Button
                                        mt={6}
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