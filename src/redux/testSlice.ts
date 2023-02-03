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
        resetAllData: (state) => {
            state = initialState;
        },
        set
    }
})

