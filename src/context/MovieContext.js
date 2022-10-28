import { createContext, useState } from "react";
import allUsers from "../data/User";
export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [users, setUsers] = useState([...allUsers]);
  const [login, setLogin] = useState(false);
  const [person, setPerson] = useState({
    id: users.length + 1,
    name: "",
    email: "",
    password: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4BPQQmAhaOjJX5QGnLcj8spS7lpopLiW36_P8FTSH0mlazlJvkoQRCULvbRtHuEOJbE&usqp=CAU",
    active: false,
    admin: false,
  });
  const [loginUser, setLoginUser] = useState([]);
  const value = {
    users,
    setUsers,
    login,
    setLogin,
    person,
    setPerson,
    loginUser,
    setLoginUser,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
export default MovieContextProvider;
