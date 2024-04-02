import { useState } from "react";
import "./Tabs.css";
import img1 from '../../assets/1.png'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const List = [
    [
      "Accounting and Payroll Administration",
      "Business Administration Professional",
      "Business and Digital Marketing Management",
      "Human Resources and Payroll Coordinatior",
      "Business Accounting Technician",
      "Social Media and Marketing",
      "Social Media Specialist",
    ],
    [
      "Child and Youth Services Worker",
      "Massage Therapy 2400",
      "Medical Office Administration",
      "Rehabilitation Therapy Assistant",
    ],
    ["Dental Assisting"],
    ["Immigration Assistant"],
    ["Education Assistant"],
    [
      "Cybersecurity Specialist",
      "Web and Mobile Applicatiobs Development",
      "Cybersecurity Specialist",
      "Web and Mobile Applicatiobs Development",
      "Mobile Application Development",
    ],
  ];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <div className="mainbox">
    <h1>Choose a Program</h1>
      <div className="box">
        <div className="navlinks">
          {List.map((item, index) => (
            <a
              href="#"
              key={index}
              onClick={() => handleClick(index)}
              className={activeTab === index ? "active" : ""}
            >
              {item[0]}
            </a>
          ))}
        </div>
        {List.map((item, index) => (
          <section key={index} style={{ display: activeTab === index ? "block" : "none" }}>
            <ul>
              {item.map((program, i) => (
                <li key={i}>
                  <img src={img1} alt="Program Logo" />
                  {program}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}

export default Tabs;