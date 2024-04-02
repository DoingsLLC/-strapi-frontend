import { useState } from "react";
import "./BookCall.css"; // Import your CSS file for styling
import Form from "../../Form/Form";

const ArtDesign = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRequestCall = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="Art-Page">
      <div className="Call-Container">
        <div className="Call-box">
          <p>
            Would you like our educational consultants assist you in choosing
            the best <br /> program for you?
          </p>

          <p className="call-box-p2">
            Request a call bak below and one of our consultant will contact you
            soon.
          </p>

          <br />
          <button className="Call-button" onClick={handleRequestCall}>
            Request A Call Back
          </button>
        </div>
      </div>
      {showForm && <Form onClose={handleCloseForm} />}
    </div>
  );
};

export default ArtDesign;
