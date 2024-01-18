import { useState } from "react";


function Counter() {


  let [count, setCount] =useState(0)

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <>
    <h1> My Counter </h1>
    
    <div>{count}</div>
    <button onClick={increment} className="btn btn-success">Increment</button>
    </>
  )
}

export default Counter
