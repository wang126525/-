var reducerObj = function(state = [],action = {}){
//	var type = action.type;
//	var val = action.val;
	var {type,val} = action;
	
	switch (type){
		case "ADD_ITEM_OBJ":
			return [...state,val];
			break;
		case "DELETE_ITEM_OBJ":
			//val 索引值
			state.splice(val,1);
			return state;
			break;
		default:
			return state;
			break;
	}
}
export default reducerObj;