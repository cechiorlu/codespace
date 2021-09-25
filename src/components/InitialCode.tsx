import React from 'react';
import { Formik, Form, Field } from 'formik';
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'

interface InitialCodeProps {

}

export const InitialCode: React.FC<InitialCodeProps> = ({}) => {
    return (
        <Flex direction="column">
            <Box>

            </Box>
            <Button>Run Code</Button>
            <Button>All Done</Button>
        </Flex>
    );
}

export default InitialCode

