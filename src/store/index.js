import { configureStore, createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        email: '',
        age: '',
        phoneNumber: '',
        password: ''
    },
    reducers: {
        addUser(state, action) {
            state.userName = action.payload.userName
            state.email = action.payload.email
            state.age = action.payload.age
            state.phoneNumber = action.payload.phoneNumber
            state.password = action.payload.password
        }
    }
    
})

const store = configureStore({
    reducer: userSlice.reducer
})

export const actions = userSlice.actions;
export default store;