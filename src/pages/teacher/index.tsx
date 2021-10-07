import React from 'react';
import {
    Flex, Box, Text, Button, Image, Table,
    Thead, Tbody, Tr, Th, Td, TableCaption, Link
} from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUsername, setRole } from "../../features/Slices/userSlice";





interface teacherDashboardProps {

}

export const teacherDashboard: React.FC<teacherDashboardProps> = ({ }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.username)
    const courses = useAppSelector(state => state.courses.courses)

    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                width='100%'
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                bgColor='white'
                pb='20px'
            >
                <Flex width='100%'
                    justifyContent='space-between'
                    py="20px"
                    px="20px"
                    alignItems="center"
                    borderBottom="2px solid #F0F0F0"
                >
                    <Text>Dashboard</Text>
                    <Link href="">
                        <Image src="/images/Bellicon.png" w="18px" h="21.6px" />
                    </Link>
                </Flex>

                <Flex justifyContent="space-between" mr="15px">
                    {/* left menu */}
                    <Flex direction="column"
                        bgColor="stroke"
                        width="30%"
                        height="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Box>
                            <Text>Test</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                        <Box>
                            <Text>Courses</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>

                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="40px"
                        justifyContent="space-between"
                    >
                        <Flex w="100%" h="208px" bgColor="blue" p="20px" justifyContent="space-between">
                            <Flex justifyContent="space-between" direction="column">
                                <Text>Hello {user}</Text>
                                <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio repudiandae ea, fugit atque sed reprehenderit impedit libero illo nisi alias. Placeat illum quia vero officia atque ab consequuntur officiis!</Text>
                                <Flex>
                                    <Button variant="outline">Create Course</Button>
                                    <Button>Create Test</Button>
                                </Flex>
                            </Flex>
                            <Image src='/images/teacher.png' w="336px" h="234px" style={{ transform: "translateY(-48px)" }} />
                        </Flex>

                        <Box>
                            <Flex w="100%" justifyContent="space-between" my={4}>
                                <Text>Created courses</Text>
                                <Text>View more <ArrowRightIcon /></Text>
                            </Flex>
                            <Flex w="100%" justifyContent="space-between" mt={2}>
                                <Box h="200px" px="10px" py="15px" w="49%" border="2px solid" borderColor="stroke">
                                    <Flex justifyContent="space-between" mb={4}>
                                        <Text>Course Title</Text>
                                        <Text>Course level: difficulty</Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                                <Box h="200px" px="10px" py="15px" w="49%" border="2px solid" borderColor="stroke">
                                    <Flex justifyContent="space-between" mb={4}>
                                        <Text>Course Title</Text>
                                        <Text>Course level: difficulty</Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                            </Flex>
                            <Flex w="100%" justifyContent="space-between" mt={2}>
                                <Box h="200px" px="10px" py="15px" w="49%" border="2px solid" borderColor="stroke">
                                    <Flex justifyContent="space-between" mb={4}>
                                        <Text>Course Title</Text>
                                        <Text>Course level: difficulty</Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                                <Box h="200px" px="10px" py="15px" w="49%" border="2px solid" borderColor="stroke">
                                    <Flex justifyContent="space-between" mb={4}>
                                        <Text>Course Title</Text>
                                        <Text>Course level: difficulty</Text>
                                    </Flex>
                                    <Text>Front End Development</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aut mollitia laborum fugiat quibusdam. Deleniti, eius.</Text>

                                </Box>
                            </Flex>
                        </Box>

                        <Box>
                            <Flex w="100%" justifyContent="space-between" my={4}>
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
                                    </Tbody>

                                </Table>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex >
    );
}

export default teacherDashboard