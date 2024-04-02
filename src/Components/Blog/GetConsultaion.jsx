import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import "./Consultaion.css";

const GetConsultaion = ({ onApplyNowClick }) => {
  return (
    <>
      <Container>
        <div className="Consultation-container">
          <div className="consultation-content">
            <h1>A Step Away From Turning Your Dream To Reality</h1>
            <button onClick={onApplyNowClick}>
              Get Your Free Consultation Now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

GetConsultaion.propTypes = {
  onApplyNowClick: PropTypes.func.isRequired,
};

export default GetConsultaion;
