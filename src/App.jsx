import Navbar from "./Components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CalgaryNorth from "./Components/CalgaryNorth/CalgaryNorth.jsx";
import StudyOnCampus from "./Components/StudyOnCampus/StudyOnCampus.jsx";
import ChooseCity from "./Components/ChooseCity/ChooseCity.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Headfoot from "./Components/HeadFoot/HeadFoot.jsx";
import Discover from "./Components/Discover/Discover.jsx";
import Choose from "./Components/Choose/Choose.jsx";
import ReadyGetStarted from "./Components/ReadyGetStarted/ReadyGetStarted.jsx";
import StudyOnline from "./Components/StudyOnline/StudyOnline.jsx";
import ArtDesign from "./Components/ArtDesign/ArtDesign.jsx";
import CourseDetail from "./Components/CourseDetails/CourseDetail.jsx";
import { useState } from "react";
import Form from "./Components/Form/Form.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import UseFetch from "./Hooks/UseFetch.jsx";
import InternationalSE from "./Components/SmallComponents/InternationalSE/InternationalSE.jsx";
import UniApplications from "./Components/SmallComponents/UniApplication/Hero.jsx";
import CPCanadianHero from "./Components/SmallComponents/CPCanadian/CPCanadianHero.jsx";
import ACRHero from "./Components/SmallComponents/ACR/ACRHero.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import StudentStories from "./Components/Blog/StudentStories/StudentStories.jsx";
import Blogs from "./Components/Blog/Blogs/BlogsPost.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  const HomeRoutes = () => {
    return (
      <>
        <Route path="/" element={<HomeComponents />} />
      </>
    );
  };
  const HomeComponents = () => {
    const [showForm, setShowForm] = useState(false);
  
    const handleApplyNowClick = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
    return (
      <>
        <Hero onApplyNowClick={handleApplyNowClick} />
        {showForm ? <Form onClose={handleCloseForm} /> : null}
        <Headfoot onApplyNowClick={handleApplyNowClick} />
        {showForm ? <Form onClose={handleCloseForm} /> : null}
        <Discover />
        <Choose />
        <ReadyGetStarted onApplyNowClick={handleApplyNowClick} />
        {showForm ? <Form onClose={handleCloseForm} /> : null}
        <Footer OnlineClasses={onlineClassesData ? onlineClassesData : ""}
          Campuses={StudyOnCampusData ? StudyOnCampusData : ""}/>
      </>
    );
  };
  const [showForm, setShowForm] = useState(false);

  const [selectedProgram, setSelectedProgram] = useState("");
  const [prevSelectedProgram, setPrevSelectedProgram] = useState("");
  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  // const API_URL = "https://7898-111-68-102-25.ngrok-free.app";
  let {
    data: programData,
    loading: programLoading,
    error: programError,
  } = UseFetch("/api/Programs?populate=*");
  // }= UseFetch("api/Programs?populate=*");
  
  let {
    data: cityData,
    loading: cityLoading,
    error: cityError,
  } = UseFetch("/api/Cities?populate=*");
  // }= UseFetch("/api/Cities?populate=*");
  // For the second API call
  let {
    data: onlineClassesData,
    loading: onlineClassesLoading,
    error: onlineClassesError,
  } = UseFetch("/api/Onlineclasses?populate=*");
  // }= UseFetch("/api/Onlineclasses?populate=*");
  let {
    data: StudyOnCampusData,
    loading: StudyOnCampusLoading,
    error: StudyOnCampusError,
  // } = UseFetch("/api/Campuses?populate=*");
  }= UseFetch("/api/Campuses?populate=*");
  
 
  let {
    data: CampusProgramData,
    loading: CampusProgramLoading,
    error: CampusProgramError,
  } = UseFetch("/api/Campusprograms?populate=*");
  // }= UseFetch("/api/Campusprograms?populate=*");



  
  if (
    programLoading ||
    onlineClassesLoading ||
    StudyOnCampusLoading ||
    cityLoading ||
    CampusProgramLoading
  ) {
    return <div>Loading...</div>;
  }
  if (
    programError ||
    onlineClassesError ||
    StudyOnCampusError ||
    cityError ||
    CampusProgramError
  ) {
    return (
      <div>
        <p>Server Error</p>
      </div>
    );
  }
  return (
    <Router>
      <div>
        <Navbar
          onApplyNowClick={handleApplyNowClick}
          OnlineClasses={onlineClassesData ? onlineClassesData : ""}
          Campuses={StudyOnCampusData ? StudyOnCampusData : ""}
          selectedProgram={selectedProgram}
          prevSelectedProgram={prevSelectedProgram}
          setSelectedProgram={setSelectedProgram}
          setPrevSelectedProgram={setPrevSelectedProgram}
        />
        {showForm ? <Form onClose={handleCloseForm} /> : null}
        <Routes>
          {HomeRoutes()}
          <Route
            path="/study-online"
            element={
              <StudyOnline
                OnlineClasses={onlineClassesData ? onlineClassesData : ""}
                setPrevSelectedProgram={setPrevSelectedProgram}
                setSelectedProgram={setSelectedProgram}
              />
            }
          />
          <Route
            path="/study-online/program-and-courses/:classId/:title"
            element={
              <ArtDesign
                Programs={programData ? programData : ""}
                setSelectedProgram={setSelectedProgram}
              />
            }
          />
          <Route
            path="/study-online/:id/:title"
            element={
              <CourseDetail
                Programs={programData ? programData : ""}
              />
            }
          />

          <Route
            path="/study-oncampus"
            element={
              <StudyOnCampus
                Campuses={StudyOnCampusData ? StudyOnCampusData : ""}
                setPrevSelectedProgram={setPrevSelectedProgram}
                setSelectedProgram={setSelectedProgram}
              />
            }
          />
          <Route
            path="/study-oncampus/choose-a-city/:classId"
            element={<ChooseCity City={cityData ? cityData : ""} />}
            setSelectedProgram={setSelectedProgram}
          />
          <Route
            path="/study-oncampus/campus-programs/:classId"
            element={
              <CalgaryNorth
                CampusPrograms={CampusProgramData ? CampusProgramData : ""}
              />
            }
          />

          <Route
            path="/international-student-enrollment"
            element={<InternationalSE />}
          />
          <Route
            path="/university-applications"
            element={<UniApplications />}
          />
          <Route path="/collaborative-programs" element={<CPCanadianHero />} />
          <Route path="/adaptable-course-registration" element={<ACRHero />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
