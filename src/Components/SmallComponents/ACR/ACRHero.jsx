import "../UniApplication/Hero.css";
import image3 from "../../../assets/services/image3.png";
import ACRCourses from "./ACRCourses";
import ACRGetStarted from "./ACRGetStarted";
import Container from "react-bootstrap/Container";
import ACRChoose from "./ACRChoose";

const ACRHero = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="text-column ">
          <h2>Adaptable Course Registration Options</h2>
          <p>
            Are you looking for flexible and adaptable course registration
            options to suit your busy schedule and unique learning needs?
          </p>
        </div>

        <div className="image-column ">
          <img src={image3} alt="Responsive Image" />
        </div>
      </div>

      <div className="uni-text-para hero-conta">
        <p>
          Canadian Academy offers a range of course registration options
          designed to provide students with convenience, choice, and flexibility
          in their academic journey.
        </p>
      </div>

      <ACRCourses />
      <ACRChoose />

      <ACRGetStarted />
    </Container>
  );
};

export default ACRHero;
