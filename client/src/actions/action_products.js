import request from 'superagent'
export const ALL_PRODUCT="ALL_PRODUCT"
export const ADD_PRODUCT="ADD_PRODUCT"
export const ONE_PRODUCT="ONE_PRODUCT"
// const products=[{
//   id:1,
//   name:'name-1',
//   price:'price-1',
//   email:'email-1',
//   address:'address-1',
//   phone:'phone-1'
// },
// {
//   id:2,
//   name:'name-2',
//   price:'price-2',
//   email:'email-2',
//   address:'address-2',
//   phone:'phone-2'
// },
// {
//   id:3,
//   name:'name-3',
//   price:'price-3',
//   email:'email-3',
//   address:'address-3',
//   phone:'phone-3'
// },]

//////////////////////////////////////////////////
//GET All

const allProducts=(data)=>{
  return {
    type:ALL_PRODUCT,
    payload:data
  }
}

export const getAllProducts = () =>(dispatch) =>{
     
    //dispatch(setProducts(products))
    request(`http://localhost:4000/products`)
    .then(response => {         
      dispatch(allProducts(response.body))
     // console.log(response)
    })
    .catch(console.error)
}

//////////////////////////////////////////////////
//Create product

const addProduct=(data)=>{
  return {
    type:ADD_PRODUCT,
    payload:data
  }
}

export const createproduct = (row) =>(dispatch) =>{
    console.log('rr:'+row)
  request.post(`http://localhost:4000/products`).send(row)
  .then(response => {         
    dispatch(addProduct(response.body))
    //console.log(response)
  })
  .catch(console.error)
}


//////////////////////////////////////////////////
//get product

