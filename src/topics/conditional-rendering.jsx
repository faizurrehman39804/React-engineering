import React from "react";

// condition value in jsx
let age = 14;

let value = "you are NOT allowed";

if (age >= 18) {
  value = "Allowed";
}

const ConditionalRendering = () => {
  return (
    <>
      <button>{value}</button>
    </>
  );
};

export default ConditionalRendering;
