import "./DropDown.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProgramandCoursesDropDwon = ({ onlineClasses, campuses }) => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnlineClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOnline(true);
  };

  const handleOnCampusClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOnline(false);
  };

  const dataToShow = isOnline ? onlineClasses.data : campuses.data;

  const firstColumn = dataToShow.slice(0, 4);
  const secondColumn = dataToShow.slice(4, 8);

  return (
    <>
      <div className="menuContainer">
        <div className="left-side-menu-box" style={{ width: "30%" }}>
          <div className="left-menu-para">
            <a
              href="#"
              style={{ color: isOnline ? "#095797" : "black" }}
              onClick={handleOnlineClick}
            >
              Online
            </a>
            <a
              href="#"
              style={{ color: isOnline ? "black" : "#095797" }}
              onClick={handleOnCampusClick}
            >
              On Campus
            </a>
          </div>
        </div>
        <div className="right-side-menu-box" style={{ width: "70%" }}>
          <div className="right-side-cont">
            <div>
              {/* Render titles of courses for the first column */}
              {firstColumn.map((course) => (
                <p key={course.id}>
                  {isOnline ? (
                    <Link
                      to={`/study-online/program-and-courses/${
                        course.id
                      }/${course.attributes.Title.replace(/\s+/g, "-")}`}
                    >
                      {course.attributes.Title}
                    </Link>
                  ) : (
                    <Link to={`/study-oncampus/choose-a-city/${course.id}`}>
                      {course.attributes.Title}
                    </Link>
                  )}
                </p>
              ))}
            </div>
            <div>
              {/* Render titles of courses for the second column */}
              {secondColumn.map((course) => (
                <p key={course.id}>
                  {isOnline ? (
                    <Link
                      to={`/study-online/program-and-courses/${
                        course.id
                      }/${course.attributes.Title.replace(/\s+/g, "-")}`}
                    >
                      {course.attributes.Title}
                    </Link>
                  ) : (
                    <Link to={`/study-oncampus/choose-a-city/${course.id}`}>
                      {course.attributes.Title}
                    </Link>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProgramandCoursesDropDwon.propTypes = {
  onlineClasses: PropTypes.array.isRequired,
  campuses: PropTypes.array.isRequired,
};

export default ProgramandCoursesDropDwon;
