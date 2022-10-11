const combineReducers  = require("redux");

const INITAL_STATE = {
	todo : null
}

const dataReducer = (state=INITAL_STATE, action)=>{
	switch(action.type) {
		case 'ADD_DATA' : return {...state, todo : action.payload};
		case 'DELETE_DATE' : return INITAL_STATE;
		default : return state;
	}
}

const reducers = combineReducers({
	data : dataReducer
})

export default reducers
