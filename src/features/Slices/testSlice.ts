import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


type TTest = {
  title: string,
  language: string,
  difficulty: 'hard' | 'easy' | 'intermediate'
  user: string
}

interface ITests {
  tests: TTest[]
}

const initialState: ITests = {
  tests: []
}

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<TTest>) => {
      state.tests.push(action.payload)
    },
  }
})

export const { setTest } = testsSlice.actions


export default testsSlice.reducer