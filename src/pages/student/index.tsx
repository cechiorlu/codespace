import React from 'react';
import { Flex, Box, Text, Button, Image, Link } from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import Heatmap from '../../components/Heatmap'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setUsername, setRole } from "../../features/Slices/userSlice";


interface studentDashboardProps {

}

export const studentDashboard: React.FC<studentDashboardProps> = ({ }) => {
    const router = useRouter()
    const user = useAppSelector(state => state.user.username)

    return (
        <Flex>
            <Sidebar active='home' />
            <Flex
                height='100vh'
                width='100%'
                direction="column"
                justifyContent="flex-start"
                bgColor='white'
                pb="20px"
            >
                <Flex width='100%'
                    justifyContent='space-between'
                    py="20px"
                    px="20px"
                    alignItems="center"
                    borderBottom="2px solid #F0F0F0"
                >
                    <Text>Overview</Text>
                    <Link href="">
                        <Image src="/images/Bellicon.png" w="18px" h="21.6px" />
                    </Link>
                </Flex>

                <Flex justifyContent="space-between" mr="15px">
                    {/* left menu */}
                    <Flex
                        direction="column"
                        bgColor="stroke"
                        width="30%"
                        minHeight="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Box>
                            <Text>Get coding</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                        <Box>
                            <Text>Selecting a slack</Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>

                    {/* right menu */}
                    <Flex
                        direction="column"
                        width="67.5%"
                        mt="40px"
                        justifyContent="space-between"
                    >
                        <Flex w="100%" h="208px" bgColor="blue" p="20px">
                            <Flex direction="column" justifyContent="space-between">
                                <Text color="white">{user}</Text>
                                <Text color="white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio repudiandae ea, fugit atque sed reprehenderit impedit libero illo nisi alias. Placeat illum quia vero officia atque ab consequuntur officiis!</Text>
                                <Button w="240px"
                                    variant="outline"
                                    onClick={() => router.push('/student/select-test')}
                                >Take Test</Button>
                            </Flex>
                            <Image src='/images/mati.png' w="336px" h="234px" style={{ transform: "translateY(-48px)" }} />
                        </Flex>

                        <Flex w="100%" h="200px" mt={4} border="2px solid #F0F0F0" alignItems="center">
                            <Box w="49%" h="87%">
                                <Text>Success rate</Text>

                            </Box>
                            <Box p="10px" w="49%" h="87%" borderLeft="3px solid #F0F0F0">
                                <Text>Courses</Text>
                            </Box>
                        </Flex>
                        <Box mt={4}>
                            <Text>Your progress</Text>
                            <Heatmap />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default studentDashboard