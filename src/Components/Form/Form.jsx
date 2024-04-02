import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import emailjs from "emailjs-com";

const Form = ({ onClose }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    postalCode: "",
    phoneNumber: "",
    selectedProgram: "",
    canadaStatus: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    postalCode: "",
    phoneNumber: "",
    selectedProgram: "",
    canadaStatus: "",
  });

  const inputs = [
    {
      id: 6,
      name: "canadaStatus",
      type: "select",
      label: "What is your status in Canada?",
      options: [
        "I am a Canadian citizen or permanent resident",
        "I am an international student",
        "I am a refugee",
        "I am a work permit holder",
        "I have a visitor visa",
      ],
      required: true,
    },
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: 3,
      name: "postalCode",
      type: "text",
      placeholder: "Postal Code",
      required: true,
    },
    {
      id: 7,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      pattern: "^\\+?[0-9-]+$",
      required: true,
    },
    {
      id: 8,
      name: "selectedProgram",
      type: "select",
      label: "Select a Program",
      options: ["Online Programs", "On Campus Programs"],
      required: true,
    },
  ];

  useEffect(() => {
    document.body.classList.add("noScroll");
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    inputs.forEach((input) => {
      if (input.required && !values[input.name].trim()) {
        newErrors[input.name] = `${
          input.placeholder || input.label
        } cannot be empty`;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_t71v6lc", // Your EmailJS service ID
        "template_n2ynnml", // Your EmailJS template ID
        e.target, // The form element
        "CZUUkfFDO82Za-l8U" // Your EmailJS user ID
      );
      console.log("Email sent:", response);
      // Optionally, display a success message to the user
      alert("Form submitted successfully!");

      // Clear all input values after successful form submission
      setValues({
        username: "",
        email: "",
        postalCode: "",
        phoneNumber: "",
        selectedProgram: "",
        canadaStatus: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="app formBackdrop">
      <div className="formContainer" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} noValidate>
          <button className="closeButton" onClick={onClose}>
            X
          </button>
          <h1>Apply Now</h1>
          <p className="head-para">
            Please start your application by filling <br /> out the form below.
          </p>
          {inputs.map((input) => (
            <div key={input.id} className="formInput">
              {input.type === "select" ? (
                <select
                  name={input.name}
                  value={values[input.name]}
                  onChange={handleChange}
                  required={input.required}
                >
                  <option value="" disabled>
                    {input.label}
                  </option>
                  {input.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
              )}
              <span className="error">{errors[input.name]}</span>
            </div>
          ))}
          <button className="submit-btn" type="submit">
            Request Information
          </button>
          <p className="form-para">
            I understand that by submitting this form,
            <br /> I consent to be contacted by email, phone,
            <br /> text message or any other form of communication.
          </p>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Form;
