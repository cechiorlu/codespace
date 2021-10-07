import React from 'react';
import Timer from 'react-compound-timer'
import { Box } from '@chakra-ui/react'


interface StopTimerProps {
    initialTime: number
}

export const StopTimer: React.FC<StopTimerProps> = ({ initialTime }) => {
    return (
        <Timer
            initialTime={initialTime}
            direction="backward"
        >
            {() => (
                <React.Fragment>
                    <Timer.Hours />:
                    <Timer.Minutes />:
                    <Timer.Seconds />
                </React.Fragment>
            )}
        </Timer>
    );
}

export default StopTimer