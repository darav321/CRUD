import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./Theme/themeSlice.js"
import usersApi from "./features/userApi.js"

export const store = configureStore({
    
    reducer: {
        themes : themeReducer,
        [usersApi.reducerPath] : usersApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})