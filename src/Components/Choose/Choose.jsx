import "./Choose.css";
import Choose1 from "../../assets/Choose/choose1.png";
import Choose2 from "../../assets/Choose/choose 2.png";
import Choose3 from "../../assets/Choose/choose 3.png";
import Choose4 from "../../assets/Choose/choose4.png";
import Choose5 from "../../assets/Choose/choose5.png";

const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        <div className="first-div">
          <p>Why Choose Canadian Academy?</p>

          <div className="choose-text">
            <img src={Choose1} alt="" />
            <p>
              Our programs are crafted to meet the highest academic standards,
              ensuring that you receive a world-class education that prepares
              you for success.
            </p>
          </div>

          <div className="choose-text">
            <img src={Choose2} alt="" />
            <p>
              Stay ahead in your field with curriculum designed in collaboration
              with industry experts, providing you with the skills and knowledge
              needed in todays competitive job market.
            </p>
          </div>

          <div className="choose-text">
            <img src={Choose3} alt="" />
            <p>
              Whether you prefer the dynamic on-campus experience or the
              flexibility of online learning, we offer options that suit your
              lifestyle and preferences.
            </p>
          </div>

          <div className="choose-text">
            <img src={Choose4} alt="" />
            <p>
              Join a community of like-minded individuals, dedicated faculty,
              and supportive staff who are committed to your success. Our
              collaborative environment fosters connections that last a
              lifetime.
            </p>
          </div>
        </div>
        <div className="second-div">
          <img src={Choose5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
