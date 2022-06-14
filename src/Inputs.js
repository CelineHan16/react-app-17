import { useState } from "react";

function Inputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  function okClick() {
    alert(`Hello ${firstName} ${lastName}!`)
  }

  return (
    <div>
      <label>
        First name
        <input type="text" onChange={onFirstNameChange} />
      </label> <br />
      <label>
        Last name
        <input type="text" onChange={onLastNameChange} />
      </label> 
      <div>
        <button onClick={okClick}>OK</button>
      </div>
    </div>
  )
}

export default Inputs;