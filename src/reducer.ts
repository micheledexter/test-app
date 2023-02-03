import {combineReducers} from "redux";
import {testSlice} from "./redux/testSlice";

export const createRootReducer = () => {
    return combineReducers({
        test: testSlice.reducer,
    });
};
