import {createStore , applyMiddleware , compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './reducers'

import socketIOClient from "socket.io-client";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const  endpoint="http://localhost:4000"
const socketIo = socketIOClient(endpoint);
const myMiddleware = store => next => action => {
  switch(action.type){
    case 'ADD_SOCKET':
      store.sock = socketIo
      return next(action)

    case 'SEND_MESSAGE':
      console.log('ggg:'+JSON.stringify(action.payload))
      store.sock.emit('chat',action.payload)
      return next(action)
    default:
      return next(action)
  }
}
const enhancer = composeEnhancers(
  applyMiddleware(myMiddleware,ReduxThunk)
)

const store = createStore(Reducers,enhancer)

socketIo.on('chat',(data)=>{
  console.log('hhh:'+JSON.stringify(data))
  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: data
  })
})

store.dispatch({
  type: 'ADD_SOCKET',
})


export default store



