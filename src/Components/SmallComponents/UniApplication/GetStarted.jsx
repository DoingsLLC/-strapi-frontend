import { useState } from "react";
import Form from "../../Form/Form";
import "./GetStarted.css";

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
          <h3>Get Started Today!</h3>

          <p className="call-box-p2">
            Ready to embark on your journey to Canadian universities with
            confidence? Contact Canadian Academy today to learn more about our
            Streamlined Assistance services and take the first step towards a
            bright academic future in Canada.
          </p>

          <br />
          <button className="Call-button" onClick={handleRequestCall}>
            Request More Information
          </button>
        </div>
      </div>
      {showForm && <Form onClose={handleCloseForm} />}
    </div>
  );
};

export default ArtDesign;
