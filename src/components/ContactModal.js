import Contact from "./Contact";

const ContactModal = ({closeContactUsHandler}) => {
  return (
   
     <div className="modal">
     <div className="modalInfo">
     
 
     <Contact closeContactUsHandler={closeContactUsHandler} />

 
 </div>       
   </div>
  );
};

export default ContactModal;