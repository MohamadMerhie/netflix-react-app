import Login from "./Login";

const Modal = ({setShow,handleClose}) => {
  return (
    <div className="modal">
      <div className="modalInfo">

      <Login setShow={setShow}  handleClose={handleClose} />
        

      </div>
    </div>
  );
};

export default Modal;