const Contact = ({ closeContactUsHandler }) => {
  return (<>
    <form className="loginForm">
      <div className="inputDiv">
        <label>Name :</label>

        <input type="text" required />
      </div>
      <div className="inputDiv">
        <label>Surname :</label>

        <input type="text" required />
      </div>
      <div className="inputDiv">
        <label>Email Address :</label>

        <input type="email" required />
      </div>
      <div className="inputDiv">
        <label>Phone :</label>

        <input type="text" />
      </div>
      <div className="inputDiv">
        <label>Address :</label>

        <input type="text" required />
      </div>
      <div className="inputDiv">
        <label for="story">Tell us your story:</label>
        <textarea id="story" name="story" rows="6" cols="30"></textarea>
      </div>
      <div className="loginFormBtn">
        <h4 style={{ backgroundColor: "#26fa00" }}>Submit</h4>

        <h4 onClick={closeContactUsHandler}>Close</h4>
      </div>
    </form>
    </>
  );
};

export default Contact;
