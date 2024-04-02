import "./Services.css";

const choose = () => {
  return (
    <div className="choose-container1">
      <h2 style={{ textAlign: "center" }}>Why Choose Canadian Academy?</h2>

      <div className="services-container">
        <div className="services-grid">
          <div className="service " style={{ margin: "20px" }}>
            <h4>Expertise</h4>
            <p>
              Our team comprises seasoned professionals with extensive
              experience in Canadian higher education.
            </p>
          </div>

          <div className="service ">
            <h4>Personalized Approach</h4>
            <p>
              We believe in personalized guidance, ensuring that each student
              receives tailored support based on their needs.
            </p>
          </div>

          <div className="service ">
            <h4>Proven Track Record</h4>
            <p>
              Our track record of success speaks for itself, with numerous
              students gaining acceptance to top Canadian universities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default choose;
