import { useState } from "react"



function Compteur() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }


  return (
    <>
      <button onClick={increase}>+</button>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      </>
      
    
  )
}

export default Compteur;