import React from 'react';
import {
    Flex, Box, Text, Button, Image, Table,
    Thead, Tbody, Tr, Th, Td, TableCaption,
} from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { BellIcon, ArrowRightIcon } from '@chakra-ui/icons'



interface teacherDashboardProps {

}

export const teacherDashboard: React.FC<teacherDashboardProps> = ({ }) => {
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
                <Flex width='100%' justifyContent='space-between'>
                    <Text>Dashboard</Text>
                    <BellIcon />
                </Flex>

                <Flex>
                    <Flex direction="column">
                        <Box>
                            <Text>Test</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                        <Box>
                            <Text>Courses</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column">
                        <Flex>
                            <Box>
                                <Text>Hello Ifere</Text>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio repudiandae ea, fugit atque sed reprehenderit impedit libero illo nisi alias. Placeat illum quia vero officia atque ab consequuntur officiis!</Text>
                                <Flex>
                                    <Button>Create Course</Button>
                                    <Button>Create Test</Button>
                                </Flex>
                            </Box>
                            <Image src='/' />
                        </Flex>

                        <Box>
                            <Flex>
                                <Text>Created courses</Text>
                                <Text>View more <ArrowRightIcon /></Text>
                            </Flex>
                            <Flex>
                                <Box>
                                    <Flex>
                                        <Text>Course Title</Text>
                                        <Text>Course level: </Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                                <Box>
                                    <Flex>
                                        <Text>Course Title</Text>
                                        <Text>Course level: </Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                                <Box>
                                    <Flex>
                                        <Text>Course Title</Text>
                                        <Text>Course level: </Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                                <Box>
                                    <Flex>
                                        <Text>Course Title</Text>
                                        <Text>Course level: </Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>

                            </Flex>
                        </Box>

                        <Box>
                            <Flex>
                                <Text>Test Performance</Text>
                                <Text>View More <ArrowRightIcon /></Text>
                            </Flex>
                            <Box>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Test Title</Th>
                                            <Th>No of Participating Student</Th>
                                            <Th>Pass Rate</Th>
                                            <Th>Fail Rate</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Merging two sorted lists</Td>
                                            <Td>1000</Td>
                                            <Td>70%</Td>
                                            <Td>30%</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Merging two sorted lists</Td>
                                            <Td>1000</Td>
                                            <Td>70%</Td>
                                            <Td>30%</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Merging two sorted lists</Td>
                                            <Td>1000</Td>
                                            <Td>70%</Td>
                                            <Td>30%</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Merging two sorted lists</Td>
                                            <Td>1000</Td>
                                            <Td>70%</Td>
                                            <Td>30%</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Merging two sorted lists</Td>
                                            <Td>1000</Td>
                                            <Td>70%</Td>
                                            <Td>30%</Td>
                                        </Tr>
                                    </Tbody>

                                </Table>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default teacherDashboard