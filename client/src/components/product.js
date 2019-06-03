import React from 'react'

export default function prouduct(props){
    return (
      <main>
          {
            (props.product)?
             <div>
                <ul>
                    <li>name:{props.product.name}</li>
                    <li>email:{props.product.email}</li>
                    <li>phone:{props.product.phone}</li>
                    <li>price:{props.product.price}</li>
                    <li>address:{props.product.address}</li>
                </ul>
             </div>:
              <div>loading....</div>
           }
      </main>
    )

}