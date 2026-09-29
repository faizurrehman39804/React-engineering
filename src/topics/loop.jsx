import React from "react";

function Loop() {

  let users = [
    "Ali",
    "Ahmed",
    "Sara"
  ];

  return (
    <>
      {
        users.map((user,index)=>(
          <h1 key={index}>
            {user}
          </h1>
        ))
      }
    </>
  );
}

export default Loop;