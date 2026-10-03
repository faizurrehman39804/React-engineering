import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("Component mounted or updated");
  });

  return (
    <div>
      <h1>UseEffect Example</h1>
      <button>Click Me</button>
    </div>
  );
};

export default UseEffect;
