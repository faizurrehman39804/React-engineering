import React from "react";

const Formpage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Form Page</h1>
      <form className="text-center mt-10 space-y-5 gap-5">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="border border-gray-300 p-2.5" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="border border-gray-300 p-2.5" />
      </form>
    </div>
  );
};

export default Formpage;
