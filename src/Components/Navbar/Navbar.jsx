import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import ProgramandCoursesDropDwon from "./ProgramandCoursesDropDwon";
import ServiceDropDown from "./ServicesDropDown";
import homelogo from "../../assets/homelogo.png";

const Navbar = ({
  onApplyNowClick,
  OnlineClasses,
  Campuses,
  selectedProgram,
  setSelectedProgram,
  prevSelectedProgram,
  setPrevSelectedProgram,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showServiceDropDown, setShowServiceDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const [, setArtDesignPath] = useState(null);

  const service1 = location.pathname === "/international-student-enrollment";
  const service2 = location.pathname === "/university-applications";
  const service3 = location.pathname === "/collaborative-programs";
  const service4 = location.pathname === "/adaptable-course-registration";
  const aboutus = location.pathname === "/about-us";
  const isHomePage = location.pathname === "/";
  const isOnlineClassesPage = location.pathname === "/study-online";
  const isOnCampusPage = location.pathname === "/study-oncampus";
  const isBlog = location.pathname === "/blog";
  const isStories = location.pathname === "/student-stories";
  const isBlogs = location.pathname === "/blogs";

  const pathname = window.location.pathname; // Get the current pathname

  const isOnCampusURL = pathname.includes("/study-oncampus/");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", handleResize);
    const match = location.pathname.match(
      /^\/study-online\/program-and-courses\/\d+\/[^/]+$/
    );
    if (match) {
      setArtDesignPath(match[0]); // Update ArtDesign path variable
    } else {
      setArtDesignPath(null); // Reset ArtDesign path variable if not matched
    }

    // Clear selectedProgram when navigating back from program details page
    if (match && prevSelectedProgram && selectedProgram) {
      setSelectedProgram("");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    location,
    prevSelectedProgram,
    selectedProgram,
    setSelectedProgram,
    setPrevSelectedProgram,
  ]);

  const handleMenuClick = () => {
    if (isMobile) {
      setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }
  };

  const handleDropDownClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleServiceDropDownClick = () => {
    setShowServiceDropDown(!showServiceDropDown);
  };

  const handleDropDownHover = () => {
    if (!isMobile) {
      setShowDropDown(true);
    }
  };

  const handleServiceDropDownHover = () => {
    if (!isMobile) {
      setShowServiceDropDown(true);
    }
  };

  const handleDropDownLeave = () => {
    setShowDropDown(false);
  };

  const handleServiceDropDownLeave = () => {
    setShowServiceDropDown(false);
  };

  const MenuData = [
    { title: "About Us", link: "/about-us" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <>
      <div className="topnav">
        <div className="topleftnav">
          <Link to="/study-online">Online</Link>
          <Link to="/study-oncampus">On Campus</Link>
        </div>
        <p>+1 (438) 357-4008</p>

        <div className="toprightnav">
          <Link onClick={onApplyNowClick}>Apply Now</Link>
        </div>
      </div>

      <div id="" className="Navmid">
        <Link to="/" className="home-logo">
          <img src={logo} alt="" />
        </Link>
        <div className="menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navlinks ${!isMobile || menuOpen ? "open" : ""}`}>
          <a
            href="#"
            className="dropdown-trigger"
            style={{ background: "none", color: "white" }}
            onClick={handleDropDownClick}
            onMouseEnter={handleDropDownHover}
          >
            Programs and Courses <FaAngleDown />
          </a>
          {showDropDown && (
            <div
              className="dropdown-container"
              onMouseLeave={handleDropDownLeave}
            >
              <ServiceDropDown
                onlineClasses={OnlineClasses}
                campuses={Campuses}
              />
            </div>
          )}

          <a
            href="#"
            className="dropdown-trigger"
            style={{ background: "none", color: "white" }}
            onClick={handleServiceDropDownClick}
            onMouseEnter={handleServiceDropDownHover}
          >
            Services <FaAngleDown />
          </a>
          {showServiceDropDown && (
            <div
              className="service-dropdown-container"
              onMouseLeave={handleServiceDropDownLeave}
            >
              <ProgramandCoursesDropDwon
                onlineClasses={OnlineClasses}
                campuses={Campuses}
              />
            </div>
          )}

          {MenuData.map((item, index) => (
            <Link
              style={{ background: "none", color: "white" }}
              key={index}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
          <Link
            style={{
              background: "white",
              color: "#095797",
              height: "40px",
              padding: "0 15px", // Added padding
              display: "flex", // Changed display to inline-flex
              alignItems: "center", // Vertically center content
              textDecoration: "none", // Remove underline
              width: "180px",
              whiteSpace: "nowrap", // Prevent text from wrapping
            }}
            className="Head-btn"
            onClick={onApplyNowClick}
          >
            Request Information
          </Link>
        </div>
      </div>
      {/* Dynamic rendering of navlast section based on page and selected program */}
      {!isHomePage &&
        !service1 &&
        !service2 &&
        !service3 &&
        !service4 &&
        !isBlog &&
        !isBlogs &&
        !isStories &&
        !aboutus && (
          <div className="navlast">
            <div className="box">
              <img src={homelogo} alt="" />
              {/* Conditional rendering based on page and selected program */}
              {isOnlineClassesPage ? (
                <p>Study Online</p>
              ) : isOnCampusPage ? (
                <p>Study On Campus</p>
              ) : (
                <>
                  {prevSelectedProgram && !selectedProgram ? (
                    isOnCampusURL ? (
                      <p>
                        <Link
                          to="/study-oncampus"
                          style={{
                            color: "#095797",
                            fontWeight: "bold",
                          }}
                        >
                          Study On Campus
                        </Link>{" "}
                        {">"} {prevSelectedProgram}
                      </p>
                    ) : (
                      <p>
                        <Link
                          to="/study-online"
                          style={{
                            color: "#095797",
                            fontWeight: "bold",
                          }}
                        >
                          Study Online
                        </Link>{" "}
                        {prevSelectedProgram}
                      </p>
                    )
                  ) : isOnCampusURL ? (
                    <p>
                      {"Study On Campus >" +
                        prevSelectedProgram +
                        ">" +
                        selectedProgram}
                    </p>
                  ) : (
                    <p>
                      <Link
                        to="/study-online"
                        style={{
                          color: "#095797",
                          fontWeight: "bold",
                        }}
                      >
                        Study Online
                      </Link>
                      {">"}
                      {prevSelectedProgram} {">"} {selectedProgram}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
    </>
  );
};

Navbar.propTypes = {
  onApplyNowClick: PropTypes.func.isRequired,
  OnlineClasses: PropTypes.array.isRequired,
  Campuses: PropTypes.array.isRequired,
  setSelectedProgram: PropTypes.func.isRequired,
  setPrevSelectedProgram: PropTypes.func.isRequired,
  selectedProgram: PropTypes.string.isRequired,
  prevSelectedProgram: PropTypes.string.isRequired,
};

export default Navbar;
