import "./Register.scss";
import { useState, useEffect } from "react";
import Cleaning1 from "../../images/Rectangle 39.png";
import userService from "../../services/userService";
import axios from "axios";
import { AboutUs, VolunteerText } from "../../components/VolunteerText/VolunteerText";

const Register = () => {
  const initialValues = { fullname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // setFormErrors(validate(formValues));
    // if (Object.keys(formErrors) !== 0) return;
    userService
      .register(formValues.fullname, formValues.email, formValues.password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setIsSubmit(true);
        window.location.href = "/";
        console.log(res.data);
        if (res.data.code || res.status !== 200) {
          setSubmitError(res.data);
          return;
        }
        setSubmitError({});
      })
      .catch((err) => {
        setIsSubmit(false);
        setSubmitError({ msg: err.message });
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="background">
      <form className="form" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 &&
        isSubmit &&
        Object.keys(submitError).length === 0 ? (
          <div
            style={{ color: "green", fontSize: "40px" }}
            className="ui message success"
          >
            Registered successfully
          </div>
        ) : null}

        {Object.keys(submitError).length !== 0 && isSubmit ? (
          <div
            style={{ color: "red", fontSize: "40px" }}
            className="ui message failure"
          >
            Failed to register:
            {submitError.msg}
          </div>
        ) : null}
        <div className="containernow">
          {/* REGISTER */}
          <div className="register">
            <h1 className="h1ss">Register</h1>
            <label htmlFor="fullname"></label>
            <input
              name="fullname"
              type="text"
              placeholder="Name"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.fullname}</p>

            <label htmlFor="email"></label>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.email}</p>

            <label htmlFor="password"></label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />

            <p style={{ color: "red" }}>{formErrors.password}</p>
            <div className="member">
              Already have an account? <a href="/signup">Sign In</a>
            </div>

            <button>Register</button>
          </div>
        </div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7FD4D1"
          fillOpacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="semifooter">
        <AboutUs />
        <VolunteerText />
      </div>
    </div>
  );
};

export default Register;
