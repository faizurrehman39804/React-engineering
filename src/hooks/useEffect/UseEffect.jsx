// import { useEffect } from "react";
// import { useState } from "react";

// const UseEffect = () => {
//   const [num, setNum] = useState(0);

//   useEffect(
//     function () {
//       console.log("Component mounted or updated");
//     },
//     [num],
//   );

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => setNum(num + 1)}>Click Me</button>
//     </div>
//   );
// };

// export default UseEffect;

import { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Click Me</button>
    </div>
  );
};

export default UseEffect;
