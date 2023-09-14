import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) { 
            state.push(action.payload);
        },
        removeUser(state, action) { 
            // console.log('Hi ', + action.payload);
            state.splice(action.payload , 1);
        },
        deleteUsers(state, action) {
            console.log('del');
            return [];
        },
    }
});
console.log(userSlice.actions); 
export const { addUser , removeUser , deleteUsers } = userSlice.actions;

export default userSlice.reducer;