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

    setContact(prevVal => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevVal.lName,
          email: prevVal.email,
        }
      } else if (name === 'lName') {
        return {
          fName: prevVal.fName,
          lName: value,
          email: prevVal.email,
        }
      } else {
        return {
          fName: prevVal.fName,
          lName: prevVal.lName,
          email: value,
        }
      }
    });
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
