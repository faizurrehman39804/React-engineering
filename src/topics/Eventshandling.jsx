import React from "react";

function handleButtonClick(event) {
  // alert ("Hello, World!")
  // console.log(event);
  // console.log(event.target);//ess ko use krke hum ye dekh skte h ki event kis element pr hua h
}



const name = (user) => {
  // alert ("are you sure you want to click me?")
  console.log(`hello ${user}`);
};

const Eventshandling = () => {
  return (
    <div>
      {/* <h1 className='border rounded-2xl m-5 text-center cursor-pointer' onClick={handleButtonClick}>Event Handling </h1> */}
      {/* <h1 className='border rounded-2xl m-5 text-center cursor-pointer' onClick={() =>  name("Roze Lokin")}>Click Me </h1>
      <h1 className='border rounded-2xl m-5 text-center cursor-pointer' onClick={() =>  name("HI Peter I am a FAIZ")}>Click Me </h1> */}
    </div>
  );
};

export default Eventshandling;
