import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        // mini Reducers
        // in this page this state means it is the only slice state not global 
        addUser(state, action) {
            // payload u can give any name like data or etc
            state.push(action.payload)
            console.log(`data store in state successfulyy::: ${action.payload}`)
        },
        removeUser(state, action) {
            // 1 means remove that elemet or name if there is 2 then it will remove that name and its next name 
            // splice method: array.splice(start, deleteCount, item1, item2, ...)
            // start : index at which to start changing  the array ,
            // deleteCount : the number of element to remove,
            // item1,item2,...:  the element to add to the array startng at the start
            state.splice(action.payload, 1);
        },
        remoeAllUsers(state, action) { },
    },

})

export default userSlice.reducer;
// this is called actions creaters with help of this we can export our mini reducers 
export const { addUser, removeUser, remoeAllUsers } = userSlice.actions;