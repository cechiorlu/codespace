import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type Tparams = {
name: string,
type: 'string' | 'number' | 'list' | 'dictionary',
value: any
}

type TTest = {
  title: string,
  language: string,
  difficulty: string,
  user?: string,
  parameters?: Tparams[]
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