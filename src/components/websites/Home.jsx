import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate=useNavigate();

  function handleclick(){
    navigate("/products")

  }
  return (
    <div>
    <h3>Home</h3>
    <button onClick={handleclick}>Show products</button>
    </div>
  )
}

export default Home