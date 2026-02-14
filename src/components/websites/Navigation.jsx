import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div style={{gap:"1rem", display:"flex"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/aboutus"}>AboutUs</Link>
        <Link to={"/reducer"}>Use Reducer</Link>
    </div>
  )
}

export default Navigation