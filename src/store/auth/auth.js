import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
}

const createAuth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action){
            state.email = action.payload.email;
        },
        removeUser(state){
            state.email = null;
        }
    }
})

export const {setUsers, removeUser} = createAuth.actions

export default createAuth.reducer