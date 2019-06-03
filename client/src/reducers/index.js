import { combineReducers } from "redux";
import products from "./reducer_products"
import sockets from "./reducer_socket"

export default combineReducers({
  products,sockets
})

 