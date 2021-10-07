import React from 'react';
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface verificationProps {

}

export const verification: React.FC<verificationProps> = ({ }) => {
    const router = useRouter()

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
                alignItems='center'
                mt="30px"
            >
                <Text>Logo</Text>
            </Flex>
            <Flex
                flexDirection="column"
                w="588px"
                h="588px"
                m="auto"
                alignItems="center"
                height=""
            >
                <Text textStyle='h1'>Email Verification</Text>
                <Text>A verification has been sent to the email <Text>user@mail.com</Text></Text>
                <Image src='/images/mailbox.png' w="332px" h="297px" />
                <Text mt={6}> Wrong email address? <Button variant='link' onClick={() => router.back()}>Go back</Button></Text>
            </Flex>
        </Flex>
    );
}

export default verification