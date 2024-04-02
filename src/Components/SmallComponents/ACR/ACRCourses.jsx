import "../UniApplication/Services.css";

const ACRCourses = () => {
  return (
    <div>
      <h3>Our Adaptable Course Registration Options</h3>
      <div className="services-container">
        <div className="services-grid">
          <div className="service ">
            <h4>Full-Time Programs</h4>
            <p>
              Enroll in full-time programs that offer a comprehensive curriculum
              and structured learning experience. Our full-time programs are
              designed for students seeking a traditional academic path with a
              set schedule of classes and activities.
            </p>
          </div>

          <div className="service ">
            <h4>Part-Time Programs</h4>
            <p>
              Balance your studies with other commitments by choosing part-time
              programs. Our part-time options allow you to customize your course
              load and schedule, making it ideal for working professionals,
              parents, or students with other responsibilities.
            </p>
          </div>

          <div className="service ">
            <h4>Online Learning</h4>
            <p>
              Experience the convenience of online learning with our virtual
              courses. Our online programs offer flexibility in terms of time
              and location, allowing you to study from anywhere at your own pace
              while still receiving quality education and support.
            </p>
          </div>

          <div className="service ">
            <h4>Hybrid Programs</h4>
            <p>
              Combine the best of both worlds with our hybrid programs, which
              blend online and on-campus learning. These programs offer
              flexibility while also providing opportunities for in-person
              interactions, hands-on training, and networking with peers and
              faculty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACRCourses;
