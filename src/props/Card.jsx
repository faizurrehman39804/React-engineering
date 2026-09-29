import React from "react";

const Card = (props) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-md ">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          {props.user}
        </h2>

        <p className="mb-4 text-gray-600">{props.message}</p>

        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 cursor-alias">
          {props.id}
        </button>
      </div>
    </div>
  );
};

export default Card;
