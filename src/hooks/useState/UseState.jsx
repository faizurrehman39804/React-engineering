import React, { useState } from "react";

const UseState = () => {
  // this is a simple increment counter using simple conditional statement and variable.(this method is not recommended in react because it will not re-render the component when the value changes)
  //
  // let value = 0;
  // const hadleButtonClick = () => {
  //   console.log(value);
  //   value++;
  // };

  //this is a simple increment counter using useState hook.(this method is recommended in react because it will re-render the component when the value changes).
  //useState:-
  const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  const handleNumClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="border rounded-2xl m-5 text-center cursor-pointer w-[50%]">
        <h1 className="text-2xl font-bold">{count}</h1>
        <div className="flex justify-between px-80">
          <button
            onClick={handleButtonClick}
            className="border px-4 rounded-3xl text2xl font-bold bg-green-500"
          >
            +
          </button>
          <button
            onClick={handleNumClick}
            className="border px-4 rounded-3xl text2xl font-bold bg-red-500"
          >
            -
          </button>
        </div>
        {/* when oper line is commit then this line is workible. */}
      </div>
    </>
  );
};

export default UseState;
