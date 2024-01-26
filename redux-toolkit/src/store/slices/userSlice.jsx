import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        remoeAllUsers(state, action) { },
    },

})

console.log(userSlice.actions)
export default userSlice.reducer;