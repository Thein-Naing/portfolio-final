import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Skills  from "../pages/Skills";
import Portfolio  from "../pages/Portfolio";
import Contact  from "../pages/Contact.jsx";

export const Header = () => {
  return (
    <header className='header'>
      {/* <Navbar /> */}
      <h6>Hi, I'm Thein Naing</h6>
      <p>
      A former engineer and now motivated graduate from Le Wagon software development bootcamp. I have learned Ruby, Rails, HTML, CSS and
      JavaScript about 10 weeks in bootcamp.
      After bootcamp, I continue to learn MERN stack(mongodb, express.js, react, node.js) and now I can create MERN stack app from scratch.
      I am looking for an opportunity to apply these skills as an entry level software developer for meaningful projects with dedicated professional software developers.
      </p>
      <Link to="/skills"
      style={{color: 'white', textDecoration: 'none'}}
      activeStyle={{color: 'red'}}
      >
        < Skills />
      </Link>
      <Link to="/portfolio"
      style={{color: 'white', textDecoration: 'none'}}
      activeStyle={{color: 'red'}}
      >
        <Portfolio />
      </Link>
      <Link to="/contact"
      style={{color: 'white', textDecoration: 'none'}}
      activeStyle={{color: 'red'}}
      >
        <Contact />
      </Link>

    </header>
  );
}

export default Header;
