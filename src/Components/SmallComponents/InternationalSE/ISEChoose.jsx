import "../UniApplication/Services.css";

const ISEChoose = () => {
  return (
    <div>
      <h3>Why Choose Canadian Academy?</h3>
      <div className="services-container">
        <div className="services-grid">
          <div className="service ">
            <h4>Expert Guidance</h4>
            <p>
              Benefit from our teams in-depth knowledge and experience in
              assisting international students with Canadian higher education.
            </p>
          </div>

          <div className="service ">
            <h4>Comprehensive Support</h4>
            <p>
              We offer end-to-end support, from university selection to
              post-arrival services, to ensure a seamless transition and
              successful academic journey.
            </p>
          </div>

          <div className="service ">
            <h4>Global Network</h4>
            <p>
              Join a community of international students and alumni who have
              thrived in Canadian universities, building valuable connections
              and networks for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISEChoose;
