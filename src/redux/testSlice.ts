import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TestState {
    id: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    counter?: number;
    flag?: boolean;
}

const initialState: TestState = {
    id: -1,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        resetAllDataAction: (state) => {
            state = initialState;
        },
        setFirstNameAction: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastNameAction: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setPhoneAction: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmailAction: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setCounterAction: (state, action: PayloadAction<number>) => {
            state.counter = action.payload;
        },
        addCounterAction: (state, action?: PayloadAction<number>) => {
            const value = action?.payload || 1;
            const { counter } = state;
            state.counter = counter ? (counter + value) : value;
        },
        reduceCounterAction: (state, action?: PayloadAction<number>) => {
            const value = action?.payload || -1;
            const { counter } = state;
            state.counter = counter ? (counter + value) : value;
        },
        changeFlagAction: (state, action?: PayloadAction<boolean>) => {
            state.flag = action?.payload ?? true;
        },
    },
});

export const {
    resetAllDataAction,
    setFirstNameAction,
    setLastNameAction,
    setPhoneAction,
    setEmailAction,
    setCounterAction,
    addCounterAction,
    reduceCounterAction,
    changeFlagAction,
} = testSlice.actions;
