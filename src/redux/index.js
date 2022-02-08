import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    tickets: reducer
})

export default reducers;