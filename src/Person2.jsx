import React from "react";

const Person2 = ({ money, handleIncreased }) => {
  return (
    <div>
      <h2>person</h2>
      <p>Money : {money}$</p>
      <button onClick={handleIncreased}>double Money</button>
    </div>
  );
};

export default Person2;
