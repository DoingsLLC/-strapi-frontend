import "./DropDown.css";
import { Link } from "react-router-dom";

const ServicesDropDown = () => {
  return (
    <>
      <div className="serv-cont">
        <Link to="/university-applications">
          Streamlined Assistance for College and <br />
          University Applications
        </Link>

        <hr />
        <Link to="/international-student-enrollment">
          International Student Enrollment in <br /> Canadian Higher Education
        </Link>
        <hr />
        <Link to="/collaborative-programs">
          Collaborative Programs: Bridging Canadian <br /> Colleges and
          Universities
        </Link>
        <hr />
        <Link to="adaptable-course-registration">
          Adaptable Course Registration Options
        </Link>
        <hr />
      </div>
    </>
  );
};



export default ServicesDropDown;
