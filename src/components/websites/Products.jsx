 import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
    <h3>Products</h3>
    <p>click the below link to get the product details</p>
    <Link to={"details"}>Productdetails</Link>
    <Outlet />
    
    </div>
  )
}

export default Products