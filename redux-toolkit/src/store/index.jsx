import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import adminSlice from './slices/adminSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
        admin: adminSlice
    },
})


export default store;