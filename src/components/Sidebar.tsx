import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react'
import { SettingsIcon, } from '@chakra-ui/icons'

interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = ({ }) => {
    return (
        <Flex height='100vh'
            width="200px"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
        >
            <Text>Logo</Text>
            <Box>
                <SettingsIcon />
            </Box>
            <Box>
                <SettingsIcon />
            </Box>
            <Box>
                <SettingsIcon />
            </Box>
            <Box mt='auto'>
                <SettingsIcon />
            </Box>
        </Flex>
    );
}

export default Sidebar