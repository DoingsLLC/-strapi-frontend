import "./ChooseCity.css";
import location from "../../assets/StudyOnCampus/location.png";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const ChooseCity = ({ City, setSelectedProgram }) => {
  const { classId } = useParams();
  const filteredPrograms = City.data.filter((program) => {
    return (
      program.attributes.campus.data &&
      program.attributes.campus.data.id === parseInt(classId)
    );
  });
  const handleProgramClick = (programTitle) => {
    setSelectedProgram(programTitle);
  };

  const imageSrc = location;
  return (
    <>
      <div className="choose-city-text">
        <h1>Choose A City</h1>
      </div>
      <div className="res-container">
        <div className="responsive-columns-container">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="city-column"onClick={() => handleProgramClick(program.attributes.Title)}>
              <img src={imageSrc} alt="Column Image" />
              <Link to={`/study-oncampus/campus-programs/${program.id}`}>
                <p>{program.attributes.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ChooseCity.propTypes = {
  City: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        coverImage: PropTypes.string,
        attributes: PropTypes.shape({
          Title: PropTypes.string.isRequired,
        }).isRequired,
      })
    ),
  }),
};

export default ChooseCity;
