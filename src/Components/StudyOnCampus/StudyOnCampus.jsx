import "./StudyOnCampus.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OnCampus = ({
  Campuses,
  setSelectedProgram,
  setPrevSelectedProgram,
}) => {
  setSelectedProgram("");
  const handleClassClick = (className) => {
    setPrevSelectedProgram(className);
  };
  return (
    <>
      <div className="oncampus-text">
        <h1>Study on Campus</h1>
      </div>
      <div className="cam-container">
        <div className="column-container">
          {Campuses.data &&
            Campuses.data.map((campuses) => (
              <div
                key={campuses.id}
                className="column"
                onClick={() => handleClassClick(campuses.attributes.Title)}
              >
                <img
                  src={
                    "https://strapi-backend-production-abca.up.railway.app" +
                    campuses.attributes.Image?.data?.attributes?.formats
                      ?.thumbnail?.url
                  }
                  alt={`Program ${campuses.id}`}
                />
                <Link to={`/study-oncampus/choose-a-city/${campuses.id}`}>
                  <div className="overlay">
                    <p>{campuses.attributes.Title}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

OnCampus.propTypes = {
  Campuses: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        Image: PropTypes.string, // Make Image optional
        attributes: PropTypes.shape({
          Title: PropTypes.string.isRequired,
          // Add other expected properties inside attributes if needed
        }).isRequired,
      })
    ),
  }),
  setSelectedProgram: PropTypes.func.isRequired,
  setPrevSelectedProgram: PropTypes.func.isRequired,
};

export default OnCampus;
