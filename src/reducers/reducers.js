import { ADMIN,USER } from "../action/index"


function Power(state = {type:USER}, action) {
	switch (action.type) {
	    case ADMIN:
	      	return action.type
	    default:
	      	return state
	}
}

export default Power