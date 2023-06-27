import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Privacy Policy
</h2>
            <p>
              We (“Growfi Solutions Private Limited” or “Quickk” ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy(“Privacy Policy“) sets out the information practices, with respect to the use of our website www.quickk.co.in  (“Website”), including the type of information collected, how the information is collected, how the information is used and with whom it is shared. The Website is referred to as the “Platform”. References to “you” or “your” in this Privacy Policy refer to the users of this Platform whether or not you access the services available on the Platform or consummate a transaction on the Platform. References to “we”, “our” or “us” shall mean Quickk.<br></br>
              By using or accessing this Platform, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further. use or access this Platform.

            </p>
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
