import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  getAllUsersPaginated,
  getUserDetails,
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

  return (
    <div>
      <h2>User list:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => getSingleUser(user.id)}>
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
        className="btn btn-lg btn-primary"
        onClick={() => getPaginatedUsers(2)}
      >
        2
      </button>

      {user.id > 0 && (
        <div>
          <h3>User details:</h3>
          <p>Name: {user.first_name}</p>
          <p>Last name: {user.last_name}</p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt="avatar" />
        </div>
      )}
    </div>
  );
};

export default FetchExample;
