/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ViewProduct from './ViewProduct'
function ProductPage() {

  //1 Define base Url
   const baseUrl ='https://dummyjson.com/products'

  
  const [products,setProducts]=useState([])
   
//2 Define API fetching Function
const productfetch = async ()=>{
   const response = await fetch(baseUrl)
  .then (response => response.json())
  .then(arrayData=>setProducts(arrayData.products))
  console.log(products);
}

useEffect(() =>{
  productfetch()
},)


return (
    <div>

      <ViewProduct data = {products}/>
    
    </div>
  )
}

export default ProductPage
