import "./StudyOnline.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const StudyOnline = ({
  OnlineClasses,
  setSelectedProgram,
  setPrevSelectedProgram,
}) => {
  setSelectedProgram("");
  const handleClassClick = (className) => {
    setPrevSelectedProgram(className);
  };

  return (
    <>
      <div className="std-online-text">
        <h1>Study Online</h1>
      </div>
      <div className="responsive-columns-container">
        {OnlineClasses.data &&
          OnlineClasses.data.map((onlineClass) => (
            <div
              key={onlineClass.id}
              className="std-column"
              onClick={() => handleClassClick(onlineClass.attributes.Title)}
            >
              <img
                src={
                  "https://strapi-backend-production-abca.up.railway.app" +
                  onlineClass.attributes.Image?.data?.attributes?.formats
                    ?.thumbnail?.url
                }
                alt={`Program ${onlineClass.id}`}
              />
              <Link
                to={`/study-online/program-and-courses/${
                  onlineClass.id
                }/${onlineClass.attributes.Title.replace(/\s+/g, "-")}`}
              >
                <p>{onlineClass.attributes.Title}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

StudyOnline.propTypes = {
  OnlineClasses: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        coverImage: PropTypes.string, // Make Image optional
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

export default StudyOnline;
