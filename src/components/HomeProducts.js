import React from 'react'
import products  from '../products'
import Product from './product'
import './homeproduct.css'

function HomeProducts() {
    let user=true

 
    function shuffle(p){
        return p.sort(()=>0.3-Math.random()).slice(0,5)
    }
  return (
    <div className='home-products'>

        {user?
            shuffle(products)
            .map(product => <Product key={product.id} product={product}/>)
            :null
        }
 

    </div>
  )
}

export default HomeProducts
