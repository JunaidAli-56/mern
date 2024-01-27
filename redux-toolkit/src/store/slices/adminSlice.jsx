import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const adminSlice = createSlice({
    name: 'admin',
    initialState: [],
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(userSlice.actions.addUser, (state, action) => {
                state.push(action.payload)
            })
            .addCase(userSlice.actions.removeUser, (state, action) => {
                state.splice(action.payload, 1)
            })
            .addCase(userSlice.actions.removeAllUsers, () => {
                return [];
            })
    }
})

export default adminSlice.reducer;