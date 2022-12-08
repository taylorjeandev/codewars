import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Form from "./components/Form";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function handleChange(event) {
    setTime({
      ...time,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="App">
      <Timer time={time} />
      <Form />
    </div>
  );
}

export default App;
