import "./HeadFoot.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Headfoot = ({ onApplyNowClick }) => {
  return (
    <div className="head-footer">
      <div className="head-foot-btn">
        <Link>
          <button className="btn" onClick={onApplyNowClick}>
            Apply Now
          </button>
        </Link>
        <Link>
          <button className="btn" onClick={onApplyNowClick}>
            Ask A Question
          </button>
        </Link>
        <Link>
          <button className="btn" onClick={onApplyNowClick}>
            Book A Visit
          </button>
        </Link>
      </div>
    </div>
  );
};

Headfoot.propTypes = {
  onApplyNowClick: PropTypes.func.isRequired,
};
export default Headfoot;
