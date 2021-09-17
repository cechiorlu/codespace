import React from 'react';
import { Flex, Box, Text, Button, Image } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { BellIcon } from '@chakra-ui/icons'



interface studentDashboardProps {

}

export const studentDashboard: React.FC<studentDashboardProps> = ({ }) => {
    return (
        <Flex>
            <Sidebar />
            <Flex
                height='100vh'
                width='80%'
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                bgColor='white'
                mx='auto'
            >
                <Flex>
                    <Text>Overview</Text>
                    <BellIcon />
                </Flex>

                <Flex>
                    <Flex direction="column">
                        <Box>
                            <Text>Get coding</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                        <Box>
                            <Text>Selecting a slack</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column">
                        <Flex>
                            <Box>
                                <Text>Hello Ifere</Text>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio repudiandae ea, fugit atque sed reprehenderit impedit libero illo nisi alias. Placeat illum quia vero officia atque ab consequuntur officiis!</Text>
                                <Button>Take Test</Button>
                            </Box>
                            <Image src='/' />
                        </Flex>

                        <Flex>
                            <Box>
                                <Text>Success rate</Text>

                            </Box>
                            <Box>
                                <Text>Courses</Text>
                            </Box>
                        </Flex>
                        <Box>
                            <Text>Your progress</Text>
                            <Box></Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default studentDashboard