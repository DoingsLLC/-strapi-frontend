import "./CourseDetail.css";
import diplome from "../../assets/CourseDetails/diploma.png";
import duration from "../../assets/CourseDetails/duration.png";
import img1 from "../../assets/CourseDetails/card1.png";
import img2 from "../../assets/CourseDetails/card2.png";
import img3 from "../../assets/CourseDetails/card3.png";
import CallContainer from "../SmallComponents/BookCall/BookCall";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "../Form/Form";
import { useState } from "react";

const CourseDetail = ({ Programs }) => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const program = Programs.data.find((program) => program.id === parseInt(id));

  if (!program) {
    return <div>Program not found</div>;
  }

  const admissionList = program.attributes.Admission.split("\n").map(
    (item, index) => <li key={index}>{item.trim()}</li>
  );

  const benefitsList = program.attributes.Benifits.split("\n").map(
    (item, index) => <li key={index}>{item.trim()}</li>
  );

  const empOpportunityList = program.attributes.EmpOpp.split("\n").map(
    (item, index) => <li key={index}>{item.trim()}</li>
  );
  const courseDescription = program.attributes.courseDescription.map(
    (paragraph, index) => <p key={index}>{paragraph.children[0].text}</p>
  );

  return (
    <div>
      <div className="Course-Container">
        <div
          className="Course-Design-box"
          style={{
            width: "80%",
            height: "500px",
            borderRadius: "15px",
            border: "1px solid #095797",
            overflow: "hidden",
            position: "relative",
            background: `linear-gradient(to bottom, rgba(9, 87, 151, 0.5), transparent), url("http://localhost:1337${program.attributes.icon?.data?.attributes?.formats?.thumbnail?.url}") center/cover no-repeat`,
          }}
        >
          <div className="Bottom-Box">
            <p>{program.attributes.Title}</p>
            <div className="Bottom-Box-boxes">
              <img src={diplome} alt="" />
              <p>{program.attributes.courseType}</p>
            </div>
            <div className="Bottom-Box-boxes">
              <img src={duration} alt="" />
              <p>{program.attributes.courseDuration}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-conto">
        <div className="Course-Card-Container">
          <div className="Course-Card-Box">
            <img src={img1} alt="" />
            <h1>Admission</h1>
            <div className="box-text">{admissionList}</div>
          </div>
          <div className="Course-Card-Box">
            <img src={img2} alt="" />
            <h1>Benefits of The Program</h1>
            <div className="box-text">{benefitsList}</div>
          </div>
          <div className="Course-Card-Box">
            <img src={img3} alt="" />
            <h1>Employment Opportunities</h1>
            <div className="box-text">{empOpportunityList}</div>
          </div>
        </div>
      </div>

      <div className="course-detail-paragraph">{courseDescription}</div>

      <button
        className="course-btn"
        onClick={() => setShowForm(true)}
        style={{ textAlign: "center" }}
      >
        Apply Now
      </button>
      {showForm && <Form onClose={() => setShowForm(false)} />}

      <CallContainer />
    </div>
  );
};

CourseDetail.propTypes = {
  Programs: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        attributes: PropTypes.shape({
          Title: PropTypes.string.isRequired,
          courseType: PropTypes.string.isRequired,
          courseDuration: PropTypes.string.isRequired,
          Admission: PropTypes.string.isRequired,
          Benifits: PropTypes.string.isRequired,
          EmpOpp: PropTypes.string.isRequired,
          courseDescription: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CourseDetail;
