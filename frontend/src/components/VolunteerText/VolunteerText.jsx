import "./VolunteerText.scss";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <article>
          <h2>ABOUT US</h2>
          <p>
          We are a group of students from Spain, Denmark & Iceland, who want to make a difference. 
          Our goal is to keep the beaches clean, by motivating the public through our website.
          </p>
          <NavLink to="aboutus">
            <button className="aboutbtn">READ MORE</button>
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
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate interdum, ac aliquet odio mattis. 
          Class aptent ad litora torquent per conubia nostra, per inceptos himenaeos.
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
