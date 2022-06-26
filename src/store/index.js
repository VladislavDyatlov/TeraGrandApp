import { configureStore } from "@reduxjs/toolkit";
import createAuth from './auth/auth'

export const store =  configureStore({
    reducer: {
        user: createAuth,
    }
})