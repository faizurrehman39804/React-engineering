import React from "react";

// dynamic value in jsx
// const lorem = () => {
//   return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// }

// dynamic value in jsx
// const summer = () =>{
//   return "hhhhahhhah";sfdgsdfg
// }

// condition value in jsx
let age = 14;

let value = "you are NOt allawed";
if (age >= 18) value = "Allawed";

const First = () => {
  return (
    <>
      {/* use the functions inside the tags */}
      {/* <h1>Hello, World! {summer()}</h1>
    <p>{lorem()}</p>  */}

      {/*  */}
      <button>{value}</button>
    </>
  );
};

export default First;
