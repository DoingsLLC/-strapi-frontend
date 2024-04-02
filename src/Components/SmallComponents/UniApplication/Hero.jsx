import "./Hero.css";
import image1 from "../../../assets/services/img1.png";
import Services from "./Services";
import Choose from "./choose";
import GetReadyStarted from "./GetStarted";
// import Footer from '../Footer/Footer'
import Container from "react-bootstrap/Container";

const Hero = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="text-column ">
          <h2>
            Streamlined Assistance for College and University Applications
          </h2>
          <p>
            Are you looking to navigate the complex world of college and
            university applications with ease?
          </p>
        </div>

        <div className="image-column ">
          <img src={image1} alt="Responsive Image" />
        </div>
      </div>

      <div className="uni-text-para">
        <p>
          Look no further than Canadian Academy's Streamlined Assistance
          services. We specialize in helping students like you streamline the
          application process, ensuring a smooth and successful journey to your
          dream educational institution in Canada.
        </p>
      </div>

      <Services />
      <Choose />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <GetReadyStarted />
    </Container>
  );
};

export default Hero;
