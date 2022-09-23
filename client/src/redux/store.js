import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// The Global State Logic of the app. Implemented with React Redux and Redux Toolkit

// This global state combines all the partial global stats called 'slices' into the final combined global state
const store = configureStore(
    {
        reducer: {
            account: "placeholder",//accountSlice.reducer, 
            transactions: "placeholder"//transactionSlice.reducer
        }
    }
);

export default store;
