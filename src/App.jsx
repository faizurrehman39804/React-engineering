import React from "react";
import First from "./component/First.jsx";
import img from "./assets/img.jfif";
import Navbar from "./component/Navbar.jsx";
import Eventshandling from "./topics/Eventshandling.jsx";
import EventsProps from "./topics/EventsProps.jsx";
import UseState from "./hooks/UseState.jsx";
import Just_practice from "./Just_practice.jsx";
import Card from "./props/Card.jsx";
import Function_Practice from "./Function/Function_Practice.jsx";
import Calculator from "./hooks/Calculator.jsx";
import Formpage from "./FormHandling/Formpage.jsx";
import Form_Binding from "./FormHandling/Tow-way-Binding/Form_Binding.jsx";

const App = () => {
  return (
    <div>
      {/* Props draling */}
      {/* {<Card user="abdul" message="abdul" id="342617" />}
      {<Card user="abdur" message="seneir developer" id="398047" />}
      {<Card user="Faiz" message="Faiz ur rehman" id="342617" />}
      {<Card user="KoKo" message="KoKo" id="ki ka" />}
      {<Card user="kaka" message="kaka" id="342617" />} */}
      {/* {<Just_practice name="Faiz Ur Rehman" no="12345" batto="Batto" />}
      {<Just_practice name="Abdul Rehman" no="67890" batto="Batto" />}
      {<Just_practice name="KoKo" no="54321" batto="Batto" />} */}

      {<Form_Binding />}
      {/* {<Formpage />} */}
      {/* {<Function_Practice />} */}
      {/* {<UseState />} */}
      {/* {<Calculator />} */}
      {/* <First /> */}
      {/* <img src={img} alt="Description" /> */}
      {/* <First /> */}
      {/* <Navbar /> */}
      {/* <Eventshandling /> */}
      {/* {<EventsProps />} Mono Lisa */}
    </div>
  );
};

export default App;
