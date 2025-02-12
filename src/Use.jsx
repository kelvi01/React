import React, { useState } from 'react'

const Use = () => {
   const [count,setcount] = useState(0)

   const increment=()=>{
  setcount(count+1)
   }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
       increment()
      }}>click</button>
    </div>
  )
}

export default Use
