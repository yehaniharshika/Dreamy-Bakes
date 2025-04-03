import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice";




const store = configureStore({
    reducer: {
        customers: CustomerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
