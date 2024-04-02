import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./InternationalSE.css";
export const StudyCanada = () => {
  return (
    <>
      <h3>Why Study in Canada?</h3>
      <div className="choose-container">
        <Row>
          <Col>
            <p className="choose-paragraph">
              <b>Quality Education:</b> Canada is home to prestigious
              universities and colleges known for their high academic standards
              and innovative teaching methods.
            </p>
          </Col>
        </Row>
      </div>

      <div className="choose-container">
        <Row>
          <Col>
            <p className="choose-paragraph">
              <b>Diverse Culture:</b> Experience a welcoming and diverse culture
              that celebrates differences and fosters global perspectives.
            </p>
          </Col>
        </Row>
      </div>

      <div className="choose-container">
        <Row>
          <Col>
            <p className="choose-paragraph">
              <b>Career Opportunities:</b> Gain access to diverse career
              opportunities and valuable work experience through co-op programs
              and internships.
            </p>
          </Col>
        </Row>
      </div>

      <div className="choose-container">
        <Row>
          <Col>
            <p className="choose-paragraph">
              <b>Safety and Security:</b> Canada is known for its safe and
              peaceful environment, making it an ideal destination for
              international students.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StudyCanada;
