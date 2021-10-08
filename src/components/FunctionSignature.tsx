import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import Parameters from './Parameters'

interface FunctionSignatureProps {

}

export const FunctionSignature: React.FC<FunctionSignatureProps> = ({ }) => {
    const [params, setParams] = useState([])
    
    return (
        <Box h="350px">
            <Formik initialValues={{  }}
                onSubmit={async ({ }) => {
                    // console.log(stack, language, difficulty)
                }}

            >
                {({ isSubmitting }) => (
                    <Form>
                        <Flex w="100%" justifyContent="space-between">
                            <Box w="49%">
                                <InputField
                                    name="name"
                                    placeholder="Function name"
                                    label="Name"
                                />
                            </Box>
                            <Box w="49%">
                                <SelectField name="return"
                                    value=""
                                    placeholder="Returns"
                                    label="Returns"
                                    options={['number', 'string', 'list', 'dictionary']}
                                />
                            </Box>
                        </Flex>
                        <Text my={4}>Parameters</Text>
                        <Parameters />

                        <Button
                            mt={6}
                            type="submit"
                            isLoading={isSubmitting}
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
