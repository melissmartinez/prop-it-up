import React from 'react';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';
// import PersonCardComponent from "./components/"

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstname={"Jane"} lastname={"Doe"} age={45} haircolor={"Black"} />
      <PersonCardComponent firstname={"John"} lastname={"Smith"} age={88} haircolor={"Brown"} />
      <PersonCardComponent firstname={"Millard"} lastname={"Fillmore"} age={50} haircolor={"Brown"} />
      <PersonCardComponent firstname={"Maria"} lastname={"Smith"} age={62} haircolor={"Brown"} />
    </div>
  );
}

export default App;
