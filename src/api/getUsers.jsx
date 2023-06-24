import usersData from "../data/users.json";

export default function getUsersData() {
  return fetch(usersData)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((users) => {
      console.log("users~~~~~+++`", users);
      return users;
    })
    .catch((err) => console.log("API call createDeck failed: ", err));
}
