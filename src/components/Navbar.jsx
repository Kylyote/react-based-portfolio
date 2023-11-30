// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link text-light" to="/">
          About
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" to="portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={3} className="nav-link text-light" to="resume">
          Resume
        </NavLink>,
        <NavLink key={4} className="nav-link text-light" to="hobbies">
          Hobbies
        </NavLink>,
        <NavLink key={5} className="nav-link text-light" to="contact">
          Contact
        </NavLink>,
      ]}
    />
  );
}