import "./SignIn.scss";
import { useState, useEffect } from "react";
import userService from "../../../services/userService";
import { AboutUs, VolunteerText } from "../../VolunteerText/VolunteerText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SignInPage = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      userService.logIn(formValues.email, formValues.password).then((data) => {
        console.log("G");
        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.href = "/";
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!values.email) {
      errors.email = "Username is required!";
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
      <form className="form1" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div
            style={{ color: "green", fontSize: "40px" }}
            className="ui message success"
          >
            Signed in successfully
          </div>
        ) : null}
        <div className="containerss">
          {/* SIGN IN */}
          <div className="signin">
            <h1 className="h1ss">Welcome Back</h1>
            <label htmlFor="email"></label>
            <input
              name="email"
              type="email"
              placeholder="Email/Username"
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
            <div className="notAMember">
              Don't have an account? <a href="/register">Register</a>
            </div>

            <button>LOGIN</button>
          </div>
        </div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7FD4D1" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="semifooter">
                <AboutUs />
                <VolunteerText />
            </div>
    </div>
  );
};

export default SignInPage; /*}

/*
import './SignIn.scss'

const SignInPage = () => {
    return(

<form className='form'>
    <div className='containerss'>
        {/* SIGN IN */ /*}
/* <div className='signin'>
        <h1 className='h1ss'>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Log in</button>
        </div>

        {/* REGISTER */
       /* <div className='register'>
        <h1 className='h1ss'>Sign Up</h1>
        <label htmlFor="fullname">Full name</label>
        <input name="fullname" type="text" />
        
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
    
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Register</button>
        </div>

    </div>
</form>

        )
}


export default SignInPage*/
