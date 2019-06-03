import React from 'react'
import './pr_style.css'
import { connect } from 'react-redux';
import Product from './product'
import request from 'superagent'


class productContainer extends React.Component{

  state = undefined
  componentDidMount() {   
    console.log(this.props)
    request(`http://localhost:4000/products/${this.props.match.params.id}`)
    .then(response => {
        this.setState(response.body)
    })
    .catch(console.error)
  }


  render(){
    return(
      <div className="container">
        <h1>product</h1>
          <Product product={this.state}/>
         
      </div>
    );
  }
 
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
    product: state.products
  }
}


export default connect(mapStateToProps) (productContainer)