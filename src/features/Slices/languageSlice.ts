import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface TLanguage {
  language: string,
  value: number
}

const initialState: TLanguage = {
  language: '',
  value: null
}

export const languageSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    setLanguageValue: (state, action: PayloadAction<number>) => {
        state.value = action.payload
      },
  }
})

export const { setLanguage, setLanguageValue } = languageSlice.actions


export default languageSlice.reducer