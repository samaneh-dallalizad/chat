import React from 'react'

export default function allProuducts(props){
  console.log(props.products)
    return (
      <main>
          {
            (props.products!==null)?
             <div>{props.products.map(product => <p key={product.id}><span>{product.name}</span></p>)}</div>:
              <div>....</div>
           }
      </main>
    )

}