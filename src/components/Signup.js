import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Signup({handleClose2}) {
  const { users, setUsers, person, setPerson } =
    useContext(MovieContext);
    function inputChange(e) {
      let dataVonInput = e.target.value;
  
      e.target.name === "password"
        ? setPerson({ ...person, [e.target.name]: parseInt(dataVonInput) })
        : setPerson({ ...person, [e.target.name]: dataVonInput });
    } 

  function addNewPerson(e) {
    e.preventDefault();
    const newArray = [...users, person];
    setUsers(newArray);
    
    alert("You are registered!");
  }

  return (
    <>
      <form onSubmit={addNewPerson} className="loginForm">
      <h2>Singup</h2>
        <div className="inputDiv">
          <label>User Name</label>
          <input
            type="text"
            placeholder="user name"
            required
            onChange={inputChange}
            name="name"
          />
        </div>
        <div className="inputDiv" >
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={inputChange}
            name="email"
          />
        </div>

        <div className="inputDiv" >
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={inputChange}
            name="password"
          />
        </div>
        <div className="inputDiv" >
          <label>Choose a profile picture:</label>
          <input
            type="file"
            placeholder="imge"
            onChange={inputChange}
            name="img"
          />
        </div>
<div className="loginFormBtn">
        <h4 onClick={addNewPerson} variant="primary" type="submit" style={{backgroundColor: "#26fa00"}}>
          Submit
        </h4>
     <h4  onClick={handleClose2}>Close</h4>
     </div>
      </form>
    </>
  );
}

export default Signup;