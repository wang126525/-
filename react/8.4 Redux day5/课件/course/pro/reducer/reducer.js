import reducerStr from "./reducerStr.js";
import reducerObj from "./reducerObj.js";
var reducer = function(state = [],action){
	return {
	    reducerStr: reducerStr(state.reducerStr, action),
	    reducerObj: reducerObj(state.reducerObj, action)
	  };
}
export default reducer;