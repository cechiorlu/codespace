import React from 'react';
import { Flex, Box, Text, Button, Image, Link } from '@chakra-ui/react'
import { Sidebar } from '../../components/Sidebar'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'


interface studentDashboardProps {

}

const today = new Date()


export const studentDashboard: React.FC<studentDashboardProps> = ({ }) => {
    function shiftDate(date, numDays) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + numDays);
        return newDate;
    }

    function getRange(count) {
        return Array.from({ length: count }, (_, i) => i);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const randomValues = getRange(200).map((index) => {
        return {
            date: shiftDate(today, -index),
            count: getRandomInt(1, 3)
        };
    });

    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                height='100vh'
                width='100%'
                direction="column"
                // alignItems="center"
                justifyContent="flex-start"
                bgColor='white'
                // mx='auto'
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
                    {/* side menu */}
                    <Flex
                        direction="column"
                        bgColor="stroke"
                        width="30%"
                        height="calc(100vh - 110px)"
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
                    <Flex
                        direction="column"
                        width="67.5%"
                        mt="40px"
                    >
                        <Flex w="100%" h="208px" bgColor="blue" p="20px">
                            <Box>
                                <Text>Hello Ifere</Text>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio repudiandae ea, fugit atque sed reprehenderit impedit libero illo nisi alias. Placeat illum quia vero officia atque ab consequuntur officiis!</Text>
                                <Button>Take Test</Button>
                            </Box>
                            <Image src='/images/mati.png' w="336px" h="234px" style={{ transform: "translateY(-48px)" }} />
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
                            <Box>
                                <CalendarHeatmap
                                    startDate={shiftDate(today, -355)}
                                    endDate={shiftDate(today, 10)}
                                    // values accepts an array of {date: string, count: int}
                                    values={randomValues}
                                    classForValue={(value) => {
                                        if (!value) {
                                            return "color-empty";
                                        }
                                        return `color-github-${value.count}`;
                                    }}
                                    tooltipDataAttrs={(value) => {
                                        return {
                                          "data-tip": `${value.date} done : ${value.count} treatments`
                                        };
                                      }}
                                      showWeekdayLabels={true}
                                      onClick={(value) => alert(`Number of treatments done : ${value.count}`)}
                                    />
                                    <ReactTooltip />

                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default studentDashboard