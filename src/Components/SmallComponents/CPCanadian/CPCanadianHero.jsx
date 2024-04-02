import "../UniApplication/Hero.css";
import image3 from "../../../assets/services/image3.png";
import CPCanadian from "./CPCanadian";
// import StudyCanda from './StudyCanada'
import CPGetStarted from "./CPGetStarted";
import Container from "react-bootstrap/Container";
import CPChoose from "./CPChoose";

const CPCanadianHero = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="text-column ">
          <h2>
            Collaborative Programs: Bridging Canadian Colleges and Universities
          </h2>
          <p>
            Are you interested in pursuing a collaborative program that bridges
            the strengths of both colleges and universities in Canada?
          </p>
        </div>

        <div className="image-column ">
          <img src={image3} alt="Responsive Image" />
        </div>
      </div>

      <div className="uni-text-para hero-conta">
        <p>
          Canadian Academy offers a range of collaborative programs designed to
          provide students with a unique and comprehensive educational
          experience.
        </p>
      </div>

      <div
        className="uni-text-para hero-conta"
        style={{ background: "0957970A" }}
      >
        <h3>What are Collaborative Programs?</h3>
        <p style={{ width: "848px", padding: "25px" }}>
          Collaborative programs combine the practical, hands-on learning of
          colleges with the theoretical knowledge and research opportunities of
          universities. These programs are designed to equip students with a
          well-rounded skill set and prepare them for successful careers in
          their chosen fields.
        </p>
      </div>

      <CPCanadian />
      <CPChoose />

      <CPGetStarted />
    </Container>
  );
};

export default CPCanadianHero;
