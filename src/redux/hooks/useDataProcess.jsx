import { useDispatch } from "react-redux";
import usersData from "../../data/users.json";

const useUsersData = () => {
  let dispatch = useDispatch();

  const getUsersDataProcess = () => {
    const action = {
      type: "GET_USERS",
      users: usersData.employees,
    };

    dispatch(action);
  };

  const getHeroProcess = () => {
    console.log("Hello");
  };

  return { getHeroProcess, getUsersDataProcess };
};

export default useUsersData;
