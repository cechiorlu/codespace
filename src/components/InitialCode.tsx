import React from 'react';
import { Formik, Form, Field } from 'formik';
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import CodeEditor from './CodeEditor'

interface InitialCodeProps {

}

export const InitialCode: React.FC<InitialCodeProps> = ({ }) => {
    return (
        <Flex direction="column" h="350px">
            <Box>
                <CodeEditor height="300px" />
            </Box>
            <Button w="240px" mt={4} p={2}>All Done</Button>
        </Flex>
    );
}

export default InitialCode

