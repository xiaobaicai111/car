
const Reducer=function(state,action){
	if(typeof state==='undefined'){
		return {}
	}
	
	switch (action.type){
		case 'ADD_LOGIN':
			return action.text
			break;
		default:
			return state;
			break;
	}
	
}


export default Reducer;