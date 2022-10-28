import Signup from "./Signup";


const SignupModal = ({handleClose2}) => {
  return (
    <div className="modal">
    <div className="modalInfo">
    

            <Signup handleClose2={handleClose2} />

</div>       
  </div>
  );
};

export default SignupModal;