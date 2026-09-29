import React from "react";

function StyleTailwind() {
  return (
    <>
      <div className="bg-blue-600 text-white p-5 rounded-lg">
        <h1 className="text-2xl font-bold">
          Tailwind CSS in React
        </h1>

        <p className="mt-2">
          This is Tailwind CSS styling example.
        </p>

        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded">
          Click Me
        </button>
      </div>
    </>
  );
}

export default StyleTailwind;