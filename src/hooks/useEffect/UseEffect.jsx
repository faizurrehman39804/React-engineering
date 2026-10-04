import { useEffect } from "react";
import { useState } from "react"; 

const UseEffect = () => {

  const UseState = useState(0);
  const num = UseState[0];
  const setNum = UseState[1];

  useEffect(() => {
    console.log("Component mounted or updated");
  }),[];

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffect;
