import "./ArtDesign.css";
import CallContainer from "../SmallComponents/BookCall/BookCall";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ArtDesign = ({ Programs, setSelectedProgram }) => {
  const { classId, title } = useParams(); // Extract classId and programName from URL

  const filteredPrograms = Programs.data.filter((program) => {
    return (
      program.attributes.onlineclass.data &&
      program.attributes.onlineclass.data.id === parseInt(classId)
    );
  });

  const handleProgramClick = (programTitle) => {
    setSelectedProgram(programTitle);
  };

  return (
    <div className="Art-Page">
      <div className="Art-Container">
        <div className="Art-Design-box">
          <h2>{title.replace(/-/g, " ")}</h2>
          {filteredPrograms.length > 0 && (
            <p>
              {
                filteredPrograms[0].attributes.onlineclass.data.attributes
                  .classDescription
              }
            </p>
          )}
        </div>
      </div>

      <div className="Art-head">
        <h1>Choose a Program</h1>
      </div>

      <Container>

      <div className="Art-boxes">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="Art-box">
            <img
              src={
                "https://strapi-backend-production-abca.up.railway.app" +
                program.attributes.coverImage?.data?.attributes?.formats
                  ?.thumbnail?.url
              }
              alt={`Program ${program.id}`}
            />
            <Link
              to={`/study-online/${
                program.id
              }/${program.attributes.Title.replace(/\s+/g, "-")}`}
              onClick={() => handleProgramClick(program.attributes.Title)}
            >
              <p>{program.attributes.Title}</p>
            </Link>
          </div>
        ))}
      </div>
      </Container>

      <CallContainer />
    </div>
  );
};

ArtDesign.propTypes = {
  Programs: PropTypes.shape({
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
  setSelectedProgram: PropTypes.func.isRequired, // Add setSelectedProgram to PropTypes validation
};

export default ArtDesign;
