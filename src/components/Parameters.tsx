import React, { useState } from 'react';
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import { InputField } from './InputField'
import { SelectField } from './SelectField'


interface ParametersProps {

}


export const Parameters: React.FC<ParametersProps> = ({ }) => {

    return (
        <>
            <Flex w="100%" justifyContent="space-between" alignItems="end">
                <Box w="45%">
                    <InputField
                        name="name"
                        placeholder="Argument"
                        label="Name"
                    />
                </Box>
                <Box w="45%">
                    <SelectField name="type"
                        value={''}
                        placeholder="Type"
                        label="Type"
                        options={['number', 'string', 'list', 'dictionary']}
                        onChange={(e) => { }}
                    />
                </Box>
                <Button variant='link' onClick={() => { }}>
                    <Image src="/images/bin.png" w="16px" h="19px" mb="10px" />
                </Button>
            </Flex>
        </>
    );
}

export default Parameters