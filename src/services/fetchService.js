export const getAllUsers = async () => {
  let response = await fetch("https://reqres.in/api/users");

  console.log("Response: ", response);
  console.log("Response status: ", response.status);
  console.log("Response ok?: ", response.ok);

  return response.json();
};

export const getAllUsersPaginated = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);

  console.log("Response: ", response);
  console.log("Response status: ", response.status);
  console.log("Response ok?: ", response.ok);

  return response.json();
};

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);

  console.log("Response: ", response);
  console.log("Response status: ", response.status);
  console.log("Response ok?: ", response.ok);

  return response.json();
};
