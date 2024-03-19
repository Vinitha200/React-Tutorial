import "./styles.css";

import React, { useState } from "react";
export default function NormalForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const fullname = firstName + " " + lastName;
    setData([...data, fullname]);
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="NormalForm">
      <form onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          placeholder="first Name..."
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last Name..."
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button htmltype="submit">Submit</button>
      </form>
      <div>
        <ul>
          {data.map((item) => {
            return (
              <li>
                {" "}
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
