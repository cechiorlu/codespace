import React from 'react';
import { Flex, Box, Text, Image, Link } from '@chakra-ui/react'
import { Home, Courses, Settings } from './svg'

interface SidebarProps {
    active: "home" | "courses" | "settings"
}

export const Sidebar: React.FC<SidebarProps> = ({ active }) => {
    return (
        <Flex height='100vh'
            width="80px"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            pt="20px"
            pb="60px"
        >
            <Text mb={6}>Logo</Text>
            <Flex
                mt={9}
                w="100%"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderLeftColor={active === "home" ? "#04033D" : null}
                borderLeftStyle="solid"
                borderLeftWidth="4px"
            >
                <Link href="/">
                    <Home color={active === "home" ? "#04033D" : "#F0F0F0"} />
                </Link>
            </Flex>
            <Flex
                mt={5}
                w="100%"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderLeftColor={active === "courses" ? "#04033D" : null}
                borderLeftStyle="solid"
                borderLeftWidth="4px"
            >
                <Link href="">
                    <Courses color={active === "courses" ? "#04033D" : "#F0F0F0"} />
                </Link>
            </Flex>
            <Flex
                mt={5}
                w="100%"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderLeftColor={active === "settings" ? "#04033D" : null}
                borderLeftStyle="solid"
                borderLeftWidth="4px"
            >
                <Link href="">
                    <Settings color={active === "settings" ? "#04033D" : "#F0F0F0"} />
                </Link>
            </Flex>
            <Box mt='auto'>
                <Link href="">
                    <Image src='/images/logout.png' w="32px" h="32px" />
                </Link>
            </Box>
        </Flex>
    );
}

export default Sidebar