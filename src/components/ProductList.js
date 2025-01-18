import React from 'react'
import ProductCard from './ProductCard'
const products =[
    {id:1,name:'Laptop',price:1000},
    {id:2,name:'phone',price:500}

]


function ProductList() {
  return (
    <div>
    {products.map((product)=>
    (<ProductCard key ={product.id} product={product}/>)) }

    </div>
  )
}

export default ProductList