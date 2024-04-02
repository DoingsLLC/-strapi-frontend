import "./AboutUs.css";
import { Container } from "react-bootstrap";
import img1 from "../../assets/AboutUs/img1 (2).png";
import "../SmallComponents/UniApplication/Services.css";
import { useState } from "react";
import Form from "../Form/Form";

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRequestCall = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <Container>
        <div className="about-us">
          <div className="about-us-img">
            <img src={img1} alt="" />
          </div>

          <div className="about-us-text">
            <p>
              Welcome to the Canadian Academy of Education and Technology
              (CAET), a premier institution dedicated to excellence in education
              and technological advancement. Founded with a vision to connect
              isolated rural communities with the global community and nurture
              the human capital essential for modern economies and effective
              governance, CAET stands as a beacon of learning and opportunity.
            </p>
          </div>
        </div>

        <div className="about-us">
          <div className="about-us-text">
            <h2>Our Mission</h2>

            <p>
              At CAET, our mission is clear: to foster social, career, and
              economic development within our communities. We believe in
              empowering individuals with the knowledge, skills, and resources
              they need to succeed in todays dynamic world. Through our
              innovative programs and commitment to excellence, we strive to
              make a meaningful impact on society.
            </p>
          </div>

          <div className="about-us-img">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="about-us">
          <div className="about-us-img">
            <img src={img1} alt="" />
          </div>

          <div className="about-us-text">
            <h2>Location</h2>

            <p>
              Situated in the vibrant city of Toronto, Canada, CAET is
              strategically located in the heart of a thriving business and
              technology hub. Our central location provides students with access
              to a wealth of resources, networking opportunities, and industry
              connections, enriching their educational experience and preparing
              them for success in their chosen fields.
            </p>
          </div>
        </div>

        <div className="aboutus-boxes">
          <h3>Programs Offered</h3>
          <p>
            CAET offers a diverse range of career-focused programs designed to
            meet the evolving needs of the job market. Whether you are interested
            in business, technology, or a combination of both, we have the
            program for you. Our offerings include:
          </p>
        </div>

        <div className="services-container">
          <div className="services-grid">
            <div className="service ">
              <h4>Bachelor of Commerce</h4>
              <p>
                A comprehensive program that equips students with the knowledge
                and skills to excel in the world of business.
              </p>
            </div>

            <div className="service ">
              <h4>Associate of Arts</h4>
              <p>
                A versatile program that provides a solid foundation in the
                liberal arts and prepares students for further academic pursuits
                or entry-level positions.
              </p>
            </div>

            <div className="service ">
              <h4>Master of Business Administration</h4>
              <p>
                An advanced program for aspiring leaders and entrepreneurs
                seeking to elevate their careers and make a significant impact
                in the business world.
              </p>
            </div>
          </div>
        </div>

        <div className="about-us">
          <div className="about-us-text">
            <h2>Our Values</h2>

            <p>
              CAET is a private, not-for-profit, secular institute committed to
              academic excellence, innovation, and inclusivity. We believe in
              providing a supportive and inclusive learning environment where
              students from all backgrounds can thrive and reach their full
              potential.
            </p>
          </div>

          <div className="about-us-img">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="about-us">
          <div className="about-us-img">
            <img src={img1} alt="" />
          </div>

          <div className="about-us-text">
            <h2>Establishment</h2>

            <p>
              Founded in 2021 through a local treaty of Canada, CAET has quickly
              established itself as a leader in education and technology. Our
              dedicated faculty, state-of-the-art facilities, and industry
              partnerships ensure that our students receive a world-class
              education and are well-prepared for the challenges and
              opportunities of the future.
            </p>
          </div>
        </div>
      </Container>
      <div className="Art-Page About-ART-Page">
        <div className="Call-Container">
          <div className="Call-box">
            <h3>Get Started Today!</h3>

            <p className="call-box-p2">
              Join us at CAET and embark on a journey of discovery, growth, and
              success. Together, we will shape a brighter future for generations
              to come.
            </p>

            <br />
            <button className="Call-button" onClick={handleRequestCall}>
              Request More Information
            </button>
          </div>
        </div>
        {showForm && <Form onClose={handleCloseForm} />}
      </div>
    </>
  );
};

export default AboutUs;
