import { createSlice } from "@reduxjs/toolkit";
import { removeAllUsers } from "../actions";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        // mini Reducers
        // in this page this state means it is the only slice state not global 
        addUser(state, action) {
            // payload u can give any name like data or etc
            state.push(action.payload)
            // console.log(`data store in state successfulyy::: ${action.payload}`)
        },
        removeUser(state, action) {
            // 1 means remove that elemet or name if there is 2 then it will remove that name and its next name 
            // splice method: array.splice(start, deleteCount, item1, item2, ...)
            // start : index at which to start changing  the array ,
            // deleteCount : the number of element to remove,
            // item1,item2,...:  the element to add to the array startng at the start
            state.splice(action.payload, 1);

            // 2nd method 
            // return state.filter((user) => user.id !== action.payload);
        },
        removeAllUsers() {
            return [];
        },
    },
    // Note
    // if action is supposed to be handle by one reducer: use "reducers".
    // if action is supposed to be handle by multiple reducers: use "extraReducers".

    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.removeAllUsers, () => {
    //         return [];
    //     })
    // },

    //Note if anyone delete the removeAllUsers reducer then our extraReducer is nothing its failed thats why we create actions its totaly independent;
    extraReducers(builder) {
        builder.addCase(removeAllUsers, () => {
            return [];
        })
    }
})

export default userSlice.reducer;
// this is called actions creaters with help of this we can export our mini reducers 
// export const { addUser, removeUser, removeAllUsers } = userSlice.actions;
export const { addUser, removeUser } = userSlice.actions; // it will use when we use action creater


