import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/Slices/testSlice'
import userReducer from '../features/Slices/userSlice'
import coursesReducer from '../features/Slices/coursesSlice'
import codeReducer from '../features/Slices/codeSlice'
import languageReducer from '../features/Slices/languageSlice'


export const store = configureStore({
    reducer: {
        test: testReducer,
        user: userReducer,
        courses: coursesReducer,
        codeSolution: codeReducer,
        language: languageReducer 
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch