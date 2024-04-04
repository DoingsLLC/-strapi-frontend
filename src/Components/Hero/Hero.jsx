import "./Hero.css";
import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.png";

const Hero = ({onApplyNowClick}) => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={Hero1} alt="hero1" />
      </div>

      <div className="hero-body">
        <h2>START WRITING YOUR FUTURE RIGHT HERE</h2>
        <div className="left-side-image">
          <img src={Hero2} alt="hero2" />
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-para">
          <p>
            Our experienced and dedicated team of college studies consultants is
            here to guide you towards academic success. Whether you are a
            prospective student, a current student seeking direction, or someone
            considering a career change, our experts are ready to provide
            personalized advice to help you make informed decisions.
          </p>

          <div className="par-btn">
            <button className="btn">Explore Programs</button>
            <button className="btn" onClick={onApplyNowClick}>Talk To a Consultant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
