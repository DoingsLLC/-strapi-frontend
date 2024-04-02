import { useState, useEffect } from "react";
import "./CalgaryNorth.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import img1 from "../../assets/1.png";

const CalgaryNorth = ({ CampusPrograms }) => {
  const { classId } = useParams();

  const [activeTab, setActiveTab] = useState(0);
  const [tabNames, setTabNames] = useState([]);
  const [subPrograms, setSubPrograms] = useState([]);

  useEffect(() => {
    const extractedTabNames = CampusPrograms.data.filter((program) =>
          program.attributes.city.data &&
          program.attributes.city.data.id === parseInt(classId)
      )
      .map((item) => item.attributes.Title);
    setTabNames(extractedTabNames);
  }, [CampusPrograms, classId]);

  useEffect(() => {
    if (tabNames.length > 0 && CampusPrograms.data[activeTab]) {
      const selectedProgram = CampusPrograms.data.find(
        (program) =>
          program.attributes.city.data.id === parseInt(classId) &&
          program.attributes.Title === tabNames[activeTab]
          
      );


      if (selectedProgram) {
        const extractedSubPrograms =
          selectedProgram.attributes.campussubprograms.data.map(
            (item) => item.attributes.Title
          );
        setSubPrograms(extractedSubPrograms);
      } else {
        setSubPrograms([]);
      }
    } else {
      setSubPrograms([]);
    }
  }, [activeTab, tabNames, CampusPrograms, classId]);

  useEffect(() => {
    setSubPrograms([]);
  }, [classId]);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="mainbox">
        <h1>Choose a Program</h1>
        <div className="calgary-box">
          <div className="calgary-navlinks">
            {tabNames.map((tabName, index) => (
              <a
                href="javascript:void(0)"
                key={index}
                onClick={() => handleClick(index)}
                className={activeTab === index ? "active" : ""}
              >
                {tabName}
              </a>
            ))}
          </div>
          <section style={{ display: "block" }}>
            <ul>
              {subPrograms.map((subProgram, i) => (
                <li key={i}>
                  <img src={img1} alt="Program Logo" />
                  {subProgram}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

// CalgaryNorth.propTypes = {
//   CampusPrograms: PropTypes.shape({
//     data: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         attributes: PropTypes.shape({
//           Title: PropTypes.string.isRequired,
//           city: PropTypes.shape({
//             data: PropTypes.shape({
//               id: PropTypes.number.isRequired,
//             }).isRequired,
//           }).isRequired,
//           campussubprograms: PropTypes.shape({
//             data: PropTypes.arrayOf(
//               PropTypes.shape({
//                 id: PropTypes.number.isRequired,
//                 attributes: PropTypes.shape({
//                   Title: PropTypes.string.isRequired,
//                 }).isRequired,
//               })
//             ).isRequired,
//           }).isRequired,
//         }).isRequired,
//       })
//     ),
//   }),
// };

export default CalgaryNorth;
