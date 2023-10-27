import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newsLetter, setNewsLetter] = useState(true);

  // eventHandlers

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleNewsLetter = (e) => {
    setNewsLetter(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, newsLetter);
  };
  return (
    <React.Fragment>
      <Form
        firstName={firstName}
        lastName={lastName}
        newsLetter={newsLetter}
        handleFirstname={handleFirstname}
        handleLastname={handleLastname}
        handleNewsLetter={handleNewsLetter}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default App;

// TODO:
// can validate inside eventHandlers
