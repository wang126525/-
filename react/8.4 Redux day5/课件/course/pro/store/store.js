import {createStore} from "redux";
import reducer from "./../reducer/reducer.js";
var store = createStore(reducer);
export default store;
