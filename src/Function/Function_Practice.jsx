import React from "react";

const Function_Practice = () => {
  function handleClick() {
    alert("Button clicked!");
  }

  function handleMouseOver() {
    alert("Mouse over event triggered!");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold align-center">Function Practice</h1>
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
};

export default Function_Practice;
