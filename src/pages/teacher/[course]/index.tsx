import React from 'react';
import {
    Flex, Text, Image, Button, Link,
} from '@chakra-ui/react'
import { Sidebar } from '../../../components/Sidebar'
import { useRouter } from 'next/router'
// import { SelectField } from '../../../components/SelectField'
// import { InputField } from '../../../components/InputField'
// import FunctionSignature from '../../../components/FunctionSignature'
// import InitialCode from '../../../components/InitialCode'
// import TestCases from '../../../components/TestCases'
// import VerificationCode from '../../../components/VerificationCode'

interface addTestProps {

}

export const addTest: React.FC<addTestProps> = ({ }) => {
    const router = useRouter()

    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                height="100vh"
                width="100%"
                direction="column"
                justifyContent="flex-start"
                bgColor="white"
                pb="20px"
            >
                <Flex width='100%'
                    justifyContent='space-between'
                    py="20px"
                    px="20px"
                    alignItems="center"
                    borderBottom="2px solid #F0F0F0"
                >
                    <Button variant="link" onClick={() => router.back()}>
                        <Image src="/images/arrow-left.png" w="13px" h="12px" /> Go back
                    </Button>
                    <Link href="">
                        <Image src="/images/Bellicon.png" w="18px" h="21.6px" />
                    </Link>
                </Flex>

                <Flex justifyContent="space-between" mr="15px">
                    {/* left menu */}
                    <Flex direction="column"
                        bgColor="stroke"
                        width="25%"
                        h="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                            <Text> Course Title </Text>
                            <Button onClick={() => { }} >
                                <Image src="/images/addbtn.png" w="30px" h="30px" />
                            </Button>
                        </Flex>
                    </Flex>

                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="40px"
                        height="calc(100vh - 110px)"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image src="/images/courses.png" w="96px" h="74px" />
                        <Text mt={4}>No content yet...  </Text>
                        <Text mt={4}>Click on the plus icon to add a lecture and start educating</Text>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default addTest