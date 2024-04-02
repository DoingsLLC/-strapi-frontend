import "./Post.css";
import Container from "react-bootstrap/Container";
import img5 from "../../assets/Blogs/img5.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Posts = () => {
  return (
    <div>
      <Container>
        <div className="blogs-heading">
          <h1>Recent Student Stories</h1>
        </div>
        <div className="posts-container">
          <div className="left-side-container">
            <div className="left-side-container-imag-box">
              <img src={img5} alt="" />
            </div>
            <div className="left-side-container-text-box">
              <a href="" className="tags">
                Where to Study
              </a>
              <p>
                I still can’t blieve how easy it was to choose what I wanted to
                study
              </p>
            </div>
          </div>
          <div className="right-side-container">
            <div className="right-side-container-box">
              <img src={img5} alt="" />
            </div>
            <div className="right-side-container-text-box">
              <a href="" className="tags">
                Where to Study
              </a>
              <p>I still stuck to which one choose: online or on-campus</p>
            </div>
            <div className="right-side-container-box">
              <img src={img5} alt="" />
            </div>
            <div className="right-side-container-text-box">
              <a href="" className="tags">
                Where to Study
              </a>
              <p>
                Stop thinking about which field to choose after reading this
                guide
              </p>
              <a href="" className="read-more">
                Read More Interesting Blogs{" "}
                <span>
                  <FaArrowCircleRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Posts;
