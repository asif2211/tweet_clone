import axios from "axios";
export const getproductData = (setGetApi) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`, {})
    .then((response) => {
        setGetApi(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};
export const getUsers = (setUsers) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`, {})
    .then((response) => {
        setUsers(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};