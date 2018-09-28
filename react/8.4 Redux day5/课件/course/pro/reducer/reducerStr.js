var reducerStr = function(state = [],action = {}){
//	var type = action.type;
//	var val = action.val;
	var {type,val} = action;
	
	switch (type){
		case "ADD_ITEM":
			//val 添加的值
			return [...state,val];
			break;
		case "DELETE_ITEM":
			//val 索引值
			state.splice(val,1);
			return state;
			break;
		default:
			return state;
			break;
	}
}
export default reducerStr;