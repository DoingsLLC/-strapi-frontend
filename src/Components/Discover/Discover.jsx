import "./Discover.css";
import discover from "../../assets/Discover/dicover.png";
import discover1 from "../../assets/Discover/discover1.png";
import discover2 from "../../assets/Discover/discover2.png";
import discover3 from "../../assets/Discover/discover 3.png";

const Discover = () => {
  return (
    <div className="discover">
      <div className="dis-container">
        <div className="disco-text">
          <p>Discover Your Path to Success</p>
        </div>
        <div className="boxes">
          <div className="half-width">
            <img src={discover} alt="Image 1" className="full-width" />
            <img src={discover1} alt="Image 2" className="overlap" />
          </div>
          <div className="half-width">
            <div className="disco-para">
              <div className="row-1">
                <img src={discover2} alt="" />
                <h3>On-Campus Programs</h3>
              </div>
              <p>
                Immerse yourself in a vibrant campus life with our on-campus
                programs. Our state-of-the-art facilities, dedicated faculty,
                and engaging extracurricular activities create an inspiring
                environment for academic growth and personal development.
              </p>
              <div className="row-1 r-2">
                <img src={discover3} alt="" />
                <h3>Online Programs</h3>
              </div>
              <p>
                Explore the flexibility of online learning with our
                comprehensive online programs. Access course materials anytime,
                anywhere, and collaborate with fellow students and instructors
                through our interactive online platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
