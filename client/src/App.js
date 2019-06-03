import React,{Component} from 'react';
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import store from './store'
import allProductsContainer from "./components/allProductsContainer"
import productContainer from "./components/productContainer"
import socket from './components/socket'

class App extends Component{
  render(){ 
    return (
      <Provider store={store} >
        <Route path="/" exact component={allProductsContainer}/>
        <Route path="/products/:id" component={productContainer}/>
        <Route path="/socket" component={socket}/>
      </Provider>
    );
  }
}

export default App;
