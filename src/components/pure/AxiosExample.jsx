import React, { useEffect, useState } from "react";
import getRandomUser from "../../services/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   randomizeUser();
  // }, []);

  const randomizeUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.results[0]);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  return (
    <div>
      <h1>Axios Example</h1>
      {user != null ? (
        <div>
          <div className="card">
            <img src={user.picture.large} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {user.name.first} {user.name.last}
              </h5>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
          <button className="btn btn-primary mt-2" onClick={randomizeUser}>
            Generate new user
          </button>
        </div>
      ) : (
        <div>
          <h3>Generate a user...</h3>
          <button className="btn btn-primary" onClick={randomizeUser}>
            Random User
          </button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
