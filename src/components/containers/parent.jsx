import React, { useState } from "react";
import Child from "../pure/child";

const Parent = () => {
  const [name, setName] = useState("John Doe");

  function showMessage(text) {
    alert(`Message: ${text}`);
  }

  function updateName(newName) {
    setName(newName);
  }

  return (
    <div className="p-5 bg-light vh-100">
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  );
};

export default Parent;
