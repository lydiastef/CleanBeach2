import "./VolunteerText.scss";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <article>
          <h2>ABOUT US</h2>
          <p>
            We are a group of students from Gran Canaria, Denmark & Iceland who
            want to make a difference here in Gran Canaria. <br />
            We want to keep the beaches clean, and we will do that through this
            app, but also by putting up signs etc.
          </p>
          <NavLink to="aboutus">
            <button className="aboutbtn">ABOUT US</button>
          </NavLink>
        </article>
      </div>
    </>
  );
};

const VolunteerText = () => {
  return (
    <>
      <div className="Volunteer">
        <article>
          <h2>MAKE A DIFFERENCE</h2>
          <p>
          We are a group of students from Spain, Denmark & Iceland, who want to make a difference. <br />
          Our goal is to keep the beaches clean, through our website.
          </p>
          <NavLink to="signup">
            <button className="volunteerbtn">VOLUNTEER NOW</button>
          </NavLink>
        </article>
      </div>
    </>
  );
};

export { AboutUs, VolunteerText };
