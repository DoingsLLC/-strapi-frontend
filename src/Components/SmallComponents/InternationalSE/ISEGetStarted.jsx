import { useState } from "react";
import Form from "../../Form/Form";
import "./InternationalSE.css";
import "../UniApplication/GetStarted.css";

const ISEGetStarted = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRequestCall = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="Art-Page">
      <div
        className="Call-Container ISE-Container"
        style={{ paddingTop: "300px" }}
      >
        <div className="Call-box">
          <h3>Start Your Canadian Education Journey Today!</h3>
          <p className="call-box-p2">
            Unlock exciting opportunities and embrace a world-class education in
            Canada. Contact Canadian Academy today to learn more about our
            International Student Enrollment services and take the first step
            towards a bright future in Canadian higher education.
          </p>
          <br />
          <button className="Call-button" onClick={handleRequestCall}>
            Request More Information
          </button>
        </div>
      </div>
      {showForm && <Form onClose={handleCloseForm} />}

      {showForm && <Form onClose={handleCloseForm} />}
    </div>
  );
};

export default ISEGetStarted;
