import React, { useState } from "react";

const WithMoney = (WrappedComponent) => {
  return function ChildComponent(props) {
    const [money, setMoney] = useState(10);
    const handleIncreased = () => {
      setMoney((prevMoney) => prevMoney * 2);
    };

    return (
      <WrappedComponent
        money={money}
        handleIncreased={handleIncreased}
        {...props}
      />
    );
  };

  return <div>WithMoney</div>;
};

export default WithMoney;
