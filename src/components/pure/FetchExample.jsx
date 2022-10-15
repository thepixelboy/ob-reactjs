import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  getAllUsersPaginated,
  getUserDetails,
  login,
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("Users: ", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert(`Error retrieving user list: ${error}`);
      })
      .finally(() => {
        console.log("Finished retrieving user list:");
        console.table(users);
      });
  };

  const getPaginatedUsers = (page) => {
    getAllUsersPaginated(page)
      .then((response) => {
        console.log("Paginates users: ", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page);
      })
      .catch((error) => {
        alert(`Error retrieving user list: ${error}`);
      })
      .finally(() => {
        console.log("Finished retrieving user list:");
        console.table(users);
      });
  };

  const getSingleUser = (id) => {
    getUserDetails(id)
      .then((response) => {
        console.log("Single user: ", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        alert(`Error retrieving user details: ${error}`);
      })
      .finally(() => {
        console.log("Finished retrieving user details:");
        console.table(user);
      });
  };

  const authUser = () => {
    login("eve.holt@reqres.in", "cityslicka")
      .then((response) => {
        console.log("TOKEN: ", response.token);
        sessionStorage.setItem("token", response.token);
      })
      .catch((error) => {
        alert(`Unable to authenticate the user: ${error}`);
      })
      .finally(() => {
        console.log("Finished login proccess");
      });
  };

  return (
    <div>
      <h2>User list</h2>
      {users.map((user, index) => (
        <p
          key={index}
          onClick={() => getSingleUser(user.id)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={user.avatar}
            alt="avatar"
            style={{ width: "16px", height: "16px" }}
            className="me-2 align-text-top"
          />
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers}
      </p>
      <button
        className="btn btn-lg btn-primary me-2"
        onClick={() => getPaginatedUsers(1)}
      >
        1
      </button>
      <button
        className="btn btn-lg btn-primary me-2"
        onClick={() => getPaginatedUsers(2)}
      >
        2
      </button>
      <button onClick={authUser} className="btn btn-lg btn-primary">
        Simulate User Login
      </button>

      {user.id > 0 ? (
        <div class="card mt-4">
          <img src={user.avatar} alt="avatar" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <a href="mailto:{user.email}">{user.email}</a>
          </div>
        </div>
      ) : (
        <h6 className="mt-4">
          Please click any user to see detailed information.
        </h6>
      )}
    </div>
  );
};

export default FetchExample;
