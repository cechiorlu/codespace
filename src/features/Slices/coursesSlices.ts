import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type Tcourse = {
    title: string;
    code: string;
    difficulty: 'easy' | 'intermediate' | 'hard';
    test: string;
    students: number;
}

interface Icourses {
    courses: Tcourse[]
}

const initialState: Icourses = {
    courses: [
        {
            title: 'dbms',
            code: 'EEG 501',
            difficulty: 'easy',
            test: 'testId',
            students: 40,
        },
        {
            title: 'dsa',
            code: 'EEG 620',
            difficulty: 'intermediate',
            test: 'testId',
            students: 40,
        }
    ]
}

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourse: (state, action: PayloadAction<Tcourse>) => {
            state.courses.push(action.payload)
        },

    }
})

export const { setCourse } = coursesSlice.actions


export default coursesSlice.reducer