import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/Slices/testSlice'
import userReducer from '../features/Slices/userSlice'
import coursesReducer from '../features/Slices/coursesSlices'


export const store = configureStore({
    reducer: {
        test: testReducer,
        user: userReducer,
        courses: coursesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch