import {combineReducers} from "redux";

export const createRootReducer = () => {
    return combineReducers({
        test: testSlice
    })
}
