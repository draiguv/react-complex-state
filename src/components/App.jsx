import React, { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  };
  
  const updateContact = e => {
    const {name, value} = e.target;

    //* Not too short, not too long but readable
    setContact(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    });

    //* Shorter but not so readable
    // setContact(prevVal => ({ ...prevVal, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input onChange={updateContact} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={updateContact} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={updateContact} name="email" placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}
