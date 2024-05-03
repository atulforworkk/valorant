import { configureStore } from "@reduxjs/toolkit";

//reducers is the one which handle events 

export const store = configureStore({
    reducer:{}
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//in context to redux every feature is a slice 