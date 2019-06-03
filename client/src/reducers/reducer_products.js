import {ALL_PRODUCT,ADD_PRODUCT} from "../actions/action_products"


export default (state=[],action)=>{

  switch(action.type){

    case ALL_PRODUCT:
    return action.payload



    case ADD_PRODUCT:
    return [...state,action.payload]

    default:
    return state
  }

}
