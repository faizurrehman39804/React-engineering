import React from "react";

const HandleWelcomeUser = (user) => {
  alert(`Hello ${user}!`);
};

const handleHover = () => {
  alert(`Mouse is over the button`);
};

const EventsProps = () => {
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Roze Lokin")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreetings = () => {
    console.log(`Hey User, Welcome`);
    props.onClick();
  };
  return (
    <>
      <div className="grid grid-cols-1  gap-4">
        <button className="border rounded-l.5 gap-3" onClick={props.onClick}>
          Click
        </button>
        <button
          className="border rounded-l.5 gap-3"
          onMouseEnter={props.onMouseEnter}
        >
          Hover me
        </button>
        <button className="border rounded-l.5 gap-3" onClick={handleGreetings}>
          Greetings
        </button>
      </div>
    </>
  );
};

export default EventsProps;
