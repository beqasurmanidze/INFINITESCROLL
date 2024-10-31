import React from "react";
import WithMoney from "./WithMoney";
import Person1 from "./Person1";
import Person2 from "./Person2";
const App = () => {
  const UpdatedPerson = WithMoney(Person1);
  const UpdatedPerson2 = WithMoney(Person2);

  return (
    <div>
      <UpdatedPerson />
      <UpdatedPerson2 />
    </div>
  );
};

export default App;
