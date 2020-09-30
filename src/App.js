import React, { useState } from "react";
// import logo from './logo.svg';
import Calendar from "react-calendar";
import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
