import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface userState {
    username: string,
    role: string
}

const initialState: userState = {
    username: null,
    role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload
        }
    }
})

export const { setUsername, setRole } = userSlice.actions

export const getuser = (state: RootState) => state.user

export default userSlice.reducer