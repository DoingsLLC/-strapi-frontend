import "./Footer.css";
import fb from "../../assets/Footer/fb.png";
import link from "../../assets/Footer/linkedin.png";
import yt from "../../assets/Footer/yb.png";
import web from "../../assets/Footer/web.png";
import logo from "../../assets/Logo.png";

const Footer = ({OnlineClasses, Campuses}) => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>About Canadian Academy</h4>
            <a href="#">
              <p>About Us</p>
            </a>

            <a href="#">
              <p>Contact Us</p>
            </a>

            <a href="#">
              <p>Consultation</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Services</h4>
            <a href="#">
              <p>Streamlined Assistance for College and University Applications</p>
            </a>

            <a href="#">
              <p>International Student Enrollment in Canadian Higher Education</p>
            </a>
            <a href="#">
              <p>International Student Enrollment in Canadian Higher Education</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
          <h4>Study Online</h4>
          {OnlineClasses && OnlineClasses.data.map((item) => (
            <a href="#" key={item.id}>
              <p>{item.attributes.Title}</p>
            </a>
          ))}
        </div>
        <div className="sb__footer-links_div">
          <h4>Study on Campus</h4>
          {Campuses && Campuses.data.map((item) => (
            <a href="#" key={item.id}>
              <p>{item.attributes.Title}</p>
            </a>
          ))}
        </div>
        </div>
        </div>

        <div className="footer-con">
          <div className="foot-logo">
            <img src={logo} alt="" />
          </div>

          <div className="sb__footer-links_div footer-icons">
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={link} alt="" />
              </p>
              <p>
                <img src={yt} alt="" />
              </p>
              <p>
                <img src={web} alt="" />
              </p>
            </div>
          </div>
        </div>
        
        <hr className="footer-hr"></hr>
        <div className="sb__footer-below">
        
          <div className="sb_footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} All Rights Reserved by Canadian
              Academy | Powered by{" "}
              <a href="https://2nbusinessconsulting.com/">
                2N Consulting Group
              </a>
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default Footer;
