import "./Post.css";
import Container from "react-bootstrap/Container";
import img1 from "../../assets/Blogs/img1.jpeg";
import img2 from "../../assets/Blogs/img2.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";

const Posts = () => {
  return (
    <div>
      <Container>
        <div className="blogs-heading">
          <h1>Recent Posts</h1>
        </div>
        <div className="posts-container">
          <div className="left-side-container">
            <div className="left-side-container-imag-box">
              <img src={img1} alt="" />
            </div>
            <div className="left-side-container-text-box">
              <a href="" className="tags">
                Where to Study
              </a>
              <p>10 Reasons to choose University of Toronto</p>
            </div>
          </div>
          <div className="right-side-container">
            <div className="right-side-container-box">
              <img src={img2} alt="" />
            </div>
            <div className="right-side-container-text-box">
              <a href="" className="tags">
                Where to Study
              </a>
              <p>10 Reasons to choose CDI Colleges</p>
            </div>
            <div className="right-side-container-box">
              <img src={img2} alt="" />
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
