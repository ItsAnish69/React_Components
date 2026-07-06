// import React, { useState } from 'react'
// import { useEffect } from 'react'

import React, { useState } from "react"

// const Practice_2 = () => {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1)
//     }, 2000);
//   })

//   return (
//     <>
//       <h1>I've rendered {count} times</h1>
//     </>
//   )
// }

// let create a button that will display and hide image



export default function Practice_2(){

  const [show, setShow] = useState(false);

  function handleChange(){

  }

  return(
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <img src="" alt="" />
      <button ></button>
    </div>
    </>
  )
}

