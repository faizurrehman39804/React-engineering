import React from "react";

const Calculator = () => {
  const [count, setCount] = React.useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Calculator</h1>
      <h1 className="text-2xl font-bold text-center p-2.5">{count}</h1>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="border border-gray-300 bg-blue-500 text-white m-10.5 justify-center p-2.5 border-rounded"
          onClick={handleIncrease}
        >
          increase
        </button>
        <button
          className="border border-gray-300 bg-red-500 text-white m-10.5 justify-center p-2.5 border-rounded"
          onClick={handleDecrease}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Calculator;
