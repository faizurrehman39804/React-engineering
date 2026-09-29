import React, { useState } from "react";

const Just_practice = (props) => {
  return (
    <div>
      <div className="w-80 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-2 text-xl font-semibold">{props.name}</h2>

        <p className="mb-4 text-gray-600">No: {props.no}</p>

        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          {props.batto}
        </button>
      </div>{" "}
    </div>
  );
};

export default Just_practice;
