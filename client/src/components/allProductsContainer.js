import React from 'react'
import './pr_style.css'
import { connect } from 'react-redux';
import {getAllProducts,createproduct } from '../actions/action_products'
import AllProducts from './allProducts'
import CreateProduct from './createproduct'
import socketIOClient from "socket.io-client";

class allProductsContainers extends React.Component{
  
  state = {   
    value:{
      name:"",
      email:"",
      phone:"",
      price:"",
      address:""
    }
  }

  componentDidMount() {

    this.props.getAllProducts()
   
  }


  handleChange = (event) => {
    let value = this.state.value
   // value['name']
    value[event.target.name] = event.target.value
    this.setState({value});
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.createproduct(this.state.value)
    const value = {
      name:"",
      email:"",
      phone:"",
      price:"",
      address:""
    }
    this.setState({value});
  }

  render(){

    return(

      <div className="container">
        <h1>all products</h1>
          <AllProducts products={this.props.products}/>
          <CreateProduct
           name={this.state.value.name} 
           email={this.state.value.email}
           phone={this.state.value.phone}
           price={this.state.value.price}
           address={this.state.value.address}
           handleChange={this.handleChange}
           handleClick={this.handleClick}
          
           />
      </div>
    );
  }
 
}

const mapStateToProps = (state) => {
// console.log(state)
  return {
    products: state.products
  }
}


export default connect(mapStateToProps,{getAllProducts,createproduct }) (allProductsContainers)