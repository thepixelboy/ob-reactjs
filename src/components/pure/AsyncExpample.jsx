import React from "react";

const AsyncExpample = () => {
  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  function getNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  function getPromiseNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "John Doe")
      .then((response) => {
        let value = response;
        alert(`Saved name: ${value}`);
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => alert("Name saved and retrieved successfully"));
  }

  async function getMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello world"), 2000);
    });

    let message = await promise;

    await alert(`Message received: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Ooops!"));
  };

  const getError = async () => {
    returnError()
      .then((response) => alert(`Everything is OK: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => alert("Finally executed"));
  };

  const urlNotFound = async () => {
    try {
      let response = await fetch("https://invalidURL");
      alert(`Response: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`${error}.\nCheck the console to get more information`);
    }
  };

  const multiplePromises = async () => {
    let results = await Promise.all([
      fetch("https://request.in/api/users"),
      fetch("https://request.in/api/roles"),
    ]).catch((error) =>
      alert(`${error}.\nCheck the console to get more information`)
    );
  };

  return (
    <div>
      <h1>Async, Promise Examples</h1>
      <button
        className="btn btn-large btn-primary my-2 mt-2"
        onClick={getNumber}
      >
        Get number
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={getPromiseNumber}
      >
        Get promise number
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={showStorage}
      >
        Save name and show it
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={getMessage}
      >
        Receive a message after 2 seconds
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={getError}
      >
        Get an error
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={urlNotFound}
      >
        Check URL
      </button>
      <button
        className="btn btn-large btn-primary my-2 mx-2"
        onClick={multiplePromises}
      >
        Multiple Promises
      </button>
    </div>
  );
};

export default AsyncExpample;
