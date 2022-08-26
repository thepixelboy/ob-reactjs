import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text on input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function changeName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div
      className="container w-50 p-5 rounded"
      style={{ backgroundColor: "#F8B88B" }}
    >
      <h2
        className="display-3"
        onMouseOver={() => console.log("On Mouse Over")}
      >
        You're on the child component, {name}
      </h2>
      <div className="my-5">
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={() => console.log("Button 1 clicked")}
        >
          Button 1
        </button>
        <button className="btn btn-primary btn-lg m-2" onClick={pressButton}>
          Button 2
        </button>
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={() => pressButtonParams("Hello")}
        >
          Button 3
        </button>
      </div>
      <div className="input-group">
        <input
          placeholder="Type something here and send it to the parent componet"
          onFocus={() => console.log("Focused on the input field")}
          onChange={(e) => console.log("Input field changed", e.target.value)}
          onCopy={(e) => console.log("Input's content copied", e.target.value)}
          ref={messageRef}
          className="form-control"
        />
        <button
          className="btn btn-primary btn-lg"
          onClick={() => send(messageRef.current.value)}
        >
          Send message
        </button>
      </div>
      <div className="mt-5">
        <form onSubmit={changeName}>
          <div className="input-group">
            <input
              ref={nameRef}
              className="form-control"
              placeholder="Type your new name here"
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Change name
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Child;
