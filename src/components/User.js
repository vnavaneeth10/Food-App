import React, { useState } from "react";

const User = ({ name, Location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: {Location}</h3>
      <h4>Contact: navaneethnair69@gmail.com</h4>
    </div>
  );
};

export default User;
