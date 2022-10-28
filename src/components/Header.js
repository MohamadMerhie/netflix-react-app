import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../logo/logo.png";
import { MovieContext } from "../context/MovieContext";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import ContactModal from "./ContactModal";

const Header = ({ setTitle, categoryTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu2Open, showMenu2] = useState(false);
  const menu = document.querySelectorAll(".menuContainer");
  const [inputText, setInputText] = useState("");
  const { login, loginUser, setLogin } = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const searchHandler = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    inputText &&
      setTitle({
        name: "",
        search: "/search/movie",
        query: `&query=${inputText}`,
      });
    categoryTitle.current = "Search result for: " + inputText;

    setInputText("");
  };

  const homeHandler = () => {
    setTitle({
      name: `/trending/all/day`,
      search: "/",
      query: "",
    });
    categoryTitle.current = "TRENDING NOW";
  };
  const buttonHandler = (e) => {
    e.preventDefault();
    menu.forEach((m) => {
      if (!menuOpen) {
        m.style.display = "block";
        setMenuOpen(true);
      } else {
        m.style.display = "none";
        setMenuOpen(false);
      }
    });
  };
  const showMenu2Handler = (e) => {
    e.preventDefault();
    const dropdown = document.querySelector(".dropdown");

    console.log(dropdown);
    if (!menu2Open) {
      dropdown.style.display = "block";
      showMenu2(true);
    } else {
      dropdown.style.display = "none";
      showMenu2(false);
    }
  };
  const clickHandler = () => setLogin(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const showContactUsHandler = () => setShowContactUs(true);
  const closeContactUsHandler = () => setShowContactUs(false);
  return (
    <div className="header">
      {/* <div className="listsContainerMain"> */}
      <div className="homeSection">
        <div className="movieIcon logoFont">
          CINEMAPOP
          <img className="logo" src={logo} alt="" />
        </div>
        <ul className="lists_container menuSection">
          <li onClick={homeHandler}>
            <Link className="Link movieIcon" to="/">
              {" "}
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link
              className="Link movieIcon"
              to="/contact-us/"
              onClick={showContactUsHandler}
            >
              <RiContactsFill /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="search_container  menuSection">
        <li>
          <form action="" onSubmit={submitHandler} className="movieIcon">
            <BiSearchAlt />
            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
              className="inputText"
            />
          </form>
        </li>
        <li className="movieIcon">
          {!login ? (
            <>
              <li className="movieIcon">
                <Link
                  className="Link movieIcon"
                  to="/login/"
                  onClick={handleShow}
                >
                  <FiLogIn />
                  Login
                </Link>
              </li>
              <li className="movieIcon">
                <Link
                  className="Link movieIcon"
                  to="/signup/"
                  onClick={handleShow2}
                >
                  <FaUserPlus />
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <div className="dropDownMain">
              <img
                src={loginUser[0].image}
                alt={loginUser[0].id}
                onClick={(e) => showMenu2Handler(e)}
              />
              <div class="dropdown">
                <p class="dropbtn">{loginUser[0].name}</p>
                <div class="dropdown-content">
                  <p>{loginUser[0].email}</p>
                  <p>Einstellung</p>
                  <p onClick={clickHandler}>Abnehmen</p>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>

      <ul className="menuContainer">
        <li>
          <form action="" onSubmit={submitHandler} className="movieIcon">
            <BiSearchAlt />

            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
              className="inputText"
            />
          </form>
        </li>

        <li onClick={homeHandler}>
          <Link className="Link movieIcon" to="/">
            {" "}
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            className="Link movieIcon"
            to="/contact-us/"
            onClick={showContactUsHandler}
          >
            <RiContactsFill /> Contact Us
          </Link>
        </li>

        <li className="movieIcon">
          <Link className="Link movieIcon" to="/login/" onClick={handleShow}>
            <FiLogIn />
            Login
          </Link>
        </li>
        <div>
          <li className="movieIcon">
            <Link
              className="Link movieIcon"
              to="/signup/"
              onClick={handleShow2}
            >
              <FaUserPlus />
              Signup
            </Link>
          </li>
        </div>
      </ul>
      <button className="menuButton" onClick={(e) => buttonHandler(e)}>
        <CgMenuGridR className="menuBtn" />
      </button>
      {showContactUs && (
        <ContactModal closeContactUsHandler={closeContactUsHandler} />
      )}
      {show && <LoginModal handleClose={handleClose} setShow={setShow} />}
      {show2 && <SignupModal handleClose2={handleClose2} />}
    </div>
  );
};

export default Header;
