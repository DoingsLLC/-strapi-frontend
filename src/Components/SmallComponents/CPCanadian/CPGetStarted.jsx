import { useState } from "react";
import Form from "../../Form/Form";
import "../UniApplication/GetStarted.css";

const CPGetStarted = () => {
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
          <h3>Start Your Journey with Collaborative Programs Today!</h3>

          <p className="call-box-p2">
            Explore new horizons and expand your academic horizons with Canadian
            Academys Collaborative Programs. Contact us today to learn more
            about our program offerings and take the first step towards a
            rewarding educational experience that bridges colleges and
            universities in Canada.
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

export default CPGetStarted;
