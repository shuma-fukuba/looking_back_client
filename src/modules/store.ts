import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== 'production',
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({serializableCheck: false})
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
