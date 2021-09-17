import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react'

interface verificationProps {

}

export const verification: React.FC<verificationProps> = ({ }) => {
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
                <Text>Logo</Text>
            </Flex>
            <Box>
                <Text textStyle='h1'>Email Verification</Text>
                <Text>A verification has been sent to the email <Text>user@mail.com</Text></Text>
                <Image src='' />
                <Text>Wrong email address? <Text>Go back</Text></Text>
            </Box>
        </Flex>
    );
}

export default [verification]