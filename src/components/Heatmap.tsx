import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import { Box } from '@chakra-ui/react'

interface HeatmapProps {

}

const today = new Date()


export const Heatmap: React.FC<HeatmapProps> = ({ }) => {
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


    const randomValues = getRange(320).map((index) => {
        return {
            date: shiftDate(today, -index),
            count: getRandomInt(0, 3)
        };
    });

    return (
        <Box border="2px solid #F0F0F0" pt={3} pr={2}>
            <CalendarHeatmap
                startDate={shiftDate(today, -355)}
                endDate={shiftDate(today, 10)}
                // values accepts an array of {date: string, count: int}
                values={randomValues}
                classForValue={(value) => {
                    if (!value) {
                        return "color-empty";
                    }
                    return `color-gitlab-${value.count}`;
                }}
                tooltipDataAttrs={(value) => {
                    return {
                        "data-tip": `${value.date} done : ${value.count} treatments`
                    };
                }}
                showWeekdayLabels={true}
                gutterSize={3}
                onClick={(value) => alert(`Number of treatments done : ${value.count}`)}
            />
            <ReactTooltip />
        </Box>
    );
}

export default Heatmap