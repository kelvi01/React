import React, { useState } from 'react'
import About from './About'

const Set = () => {

  const [count,setcount] = useState(0)

  const increment=()=>{
      setcount(count+1)
  }

  const Decrement = ()=>{
    setcount (count-1)
  }

  return (
    <div>
      
      {/* <h1>{count}</h1> */}
      <About x={count}></About>
      <button onClick={()=>{

        increment()
      }}>click</button>
       <button on onClick={()=>{
        Decrement()
       }} >click</button>
    </div>
  )
}

export default Set
