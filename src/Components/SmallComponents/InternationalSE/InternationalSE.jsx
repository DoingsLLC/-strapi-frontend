import "../UniApplication/Hero.css";
import image2 from "../../../assets/services/img2.png";
import Services from "./ISEServices";
import StudyCanda from "./StudyCanada";
import GetReadyStarted from "./ISEGetStarted";
import Container from "react-bootstrap/Container";
import ISEChoose from "./ISEChoose";

const InternationalSE = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="text-column ">
          <h2>International Student Enrollment in Canadian Higher Education</h2>
          <p>
            Are you an international student dreaming of studying in Canada, a
            country renowned for its world-class education and multicultural
            environment?
          </p>
        </div>

        <div className="image-column ">
          <img src={image2} alt="Responsive Image" />
        </div>
      </div>

      <div className="uni-text-para hero-conta">
        <p>
          Canadian Academy is here to guide you through the process of enrolling
          in Canadian higher education institutions seamlessly.
        </p>
      </div>

      <StudyCanda />
      <Services />
      <ISEChoose />

      <GetReadyStarted />
    </Container>
  );
};

export default InternationalSE;
