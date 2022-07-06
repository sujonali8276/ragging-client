import { createStore } from "redux";
import actionReducer from "./redux/reducer/actionResucer";

const store = createStore(actionReducer);
export default store;
