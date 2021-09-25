import React from 'react';
import { Formik, Form, Field } from 'formik';
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'

interface FunctionSignatureProps {

}

export const FunctionSignature: React.FC<FunctionSignatureProps> = ({ }) => {
    return (
        <Box>
            <Formik initialValues={{ returns: "", language: "", stack: "", difficulty: "" }}
                onSubmit={async ({ stack, language, difficulty }) => {
                    console.log(stack, language, difficulty)
                }}

            >
                {({ isSubmitting }) => (
                    <Form>
                        <Flex>

                            <InputField
                                name="title"
                                placeholder="Enter test title"
                                label="Test Title"
                                type="text"
                                required
                            />
                            <SelectField name="language"
                                placeholder="Select language"
                                label="Language"
                                options={['Javascript', 'Python', 'Golang', 'Java', 'C++']}
                            />
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
                            ALL DONE
                        </Button>

                    </Form>
                )}
            </ Formik>
        </Box>
    );
}

export default FunctionSignature