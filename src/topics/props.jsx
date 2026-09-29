import React from "react";


function Child(props){

  return (
    <h1>
      Hello {props.name}
    </h1>
  );
}


function Props() {

  return (
    <Child name="Ali"/>
  );
}

export default Props;