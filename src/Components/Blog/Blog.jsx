import "./Blog.css";
import Container from "react-bootstrap/Container";
import Posts from "./Posts";
import Consultaion from "./GetConsultaion";
import Stories from "./Stories";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import { useState } from "react";

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="blog-container">
        <Container>
          <div className="blogs-buttons">
            <Link to="/student-stories" className="blog-button">
              Student Case Studies
            </Link>
            <Link to="/blogs" className="blog-button">
              Blogs
            </Link>
          </div>

          <div className="blogs-text">
            <h1>
              Read from students sharing their stories, tips from consultants
              and many other resources needed to make the best educational
              journey
            </h1>

            <p>
              We believe in empowering students through education and fostering
              a community of lifelong learners. Our blog is a platform where we
              share insights, tips, and resources to help you navigate your
              educational journey and achieve your academic and career goals.
              Whether you are a prospective student, current student, or alumni,
              our blog covers a wide range of topics to support your growth and
              success.
            </p>
          </div>
        </Container>

        <Posts />
        <Consultaion onApplyNowClick={handleApplyNowClick} />
        {showForm ? <Form onClose={handleCloseForm} /> : null}
        <Stories />
      </div>
    </div>
  );
};

export default Blog;
