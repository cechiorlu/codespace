import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface TCode {
  code: string 
}

const initialState: TCode = {
  code: ''
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCodeValue: (state, action: PayloadAction<string>) => {
      state.code = action.payload
    },
  }
})

export const { setCodeValue } = codeSlice.actions


export default codeSlice.reducer