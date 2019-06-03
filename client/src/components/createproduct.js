import React from 'react'

export default function createProduct(props){
  return (<div>
            <p><label>Name:<input type="text"  name="name" value={props.name} onChange={props.handleChange} /></label></p>
            <p><label>Email:<input type="text" name="email" value={props.email} onChange={props.handleChange} /></label></p>
            <p><label>Phone:<input type="text" name="phone" value={props.phone} onChange={props.handleChange} /></label></p>
            <p><label>Price:<input type="text" name="price" value={props.price} onChange={props.handleChange} /></label></p>
            <p><label>address:<textarea  name="address"    value={props.address} onChange={props.handleChange}  /></label></p>
            <p><input type="submit" onClick={props.handleClick}/></p>
          </div>);
}