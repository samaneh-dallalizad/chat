import {SET_CHAT} from "../actions/action_socket"


export default (state={messages:[]},action)=>{

  switch(action.type){
    
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages:[...state.messages,action.payload]
      }

    default:
    return state
  }

}
