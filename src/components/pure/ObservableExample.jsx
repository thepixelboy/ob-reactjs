import React, { useState } from "react";
import { getNumbers } from "../../services/observableService";

const ObservableExample = () => {
  const [number, setNumber] = useState(0);

  const getNewNumbers = () => {
    console.log("Subscribed to Observable");
    getNumbers.subscribe({
      next(newNumber) {
        console.log("New number: ", newNumber);
        setNumber(newNumber);
      },
      error(error) {
        alert(`Something went wrong: ${error}`);
        console.log("Error on Observable: ", error);
      },
      complete() {
        alert(`Finished with number: ${number}`);
        console.log("Done with the Observable");
      },
    });
  };

  return (
    <div>
      <h2>Number: {number}</h2>
      <button
        className="btn btn-large btn-primary my-2"
        onClick={getNewNumbers}
      >
        Get new numbers
      </button>
    </div>
  );
};

export default ObservableExample;
