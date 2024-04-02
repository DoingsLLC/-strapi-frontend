import "./ReadyGetStarted.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GRSImage from "../../assets/GS/GRS1.png";

const ReadyGetStarted = ({ onApplyNowClick }) => {
  return (
    <div className="r-container">
      <div className="r-button">
        <Link className="r-btn" onClick={onApplyNowClick}>
          Ready to Get Started?
        </Link>
      </div>

      <div className="r-box">
        <div className="r-box1">
          <div className="circle">
            <img className="circle-image" src={GRSImage} alt="" />
          </div>
          <p>
            Explore our diverse range of programs and find the one that aligns
            with your goals.
          </p>
        </div>

        <div className="r-box1">
          <div className="circle">
            <img className="circle-image" src={GRSImage} alt="" />
          </div>
          <p>
            Explore our diverse range of programs and find the one that aligns
            with your goals.
          </p>
        </div>

        <div className="r-box1">
          <div className="circle">
            <img className="circle-image" src={GRSImage} alt="" />
          </div>
          <p>
            Explore our diverse range of programs and find the one that aligns
            with your goals.
          </p>
        </div>

        <div className="r-box1">
          <div className="circle">
            <img className="circle-image" src={GRSImage} alt="" />
          </div>
          <p>
            Explore our diverse range of programs and find the one that aligns
            with your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

ReadyGetStarted.propTypes = {
  onApplyNowClick: PropTypes.func.isRequired,
}
export default ReadyGetStarted;
