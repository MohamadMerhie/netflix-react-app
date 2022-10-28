import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
// import "../styles/Login.scss"


function Login({ setShow,handleClose }) {
  const {users , setLogin, setLoginUser } = useContext(MovieContext);
  const [benutzer, setBenutzer] = useState({ email: "", password: "" });
  function inputChange(e) {
    let dataVonInput = e.target.value;
    e.target.name === "password"
      ? setBenutzer({ ...benutzer, [e.target.name]: parseInt(dataVonInput) })
      : setBenutzer({ ...benutzer, [e.target.name]: dataVonInput });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const findUser = users.filter(
      (user) =>
        user.email === benutzer.email &&
        user.password === Number(benutzer.password)
    );
    if (findUser.length > 0) {
      
      setLogin(true);
      setShow(false);
      setLoginUser(findUser);
      console.log(findUser);
      localStorage.setItem("login",JSON.stringify(true));
      localStorage.setItem("loginUser",JSON.stringify(findUser));
    } else {
      alert("wrong passport or email address");
    }
  };

  return (
    <form className="loginForm">
      <h2>User Login</h2>

      <div className="inputDiv">
        <label > Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={inputChange}
          name="email"
        />
      </div>
        <h5 className="loginFormText">
          We'll never share your email with anyone else.
        </h5>

      <div className="inputDiv" >
        <label>Password </label>
        <input
          type="password"
          placeholder="Password"
          onChange={inputChange}
          name="password"
        />
      </div>
      <div className="loginFormBtn">
      <h4
        onClick={submitHandler} style={{backgroundColor: "#26fa00"}}
      >
        Login
      </h4>
      <h4 onClick={handleClose}>Close</h4>

      </div>

      
    </form>
  );
}

export default Login;