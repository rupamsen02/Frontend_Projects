import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import hamburger from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    });
  });

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <nav className={`navbar container ${sticky ? "background-nav" : ""}`}>
      <section className="logo">
        <img src={logo} alt="" />
        <h3>Educate</h3>
      </section>
      <ul className={menu ? "hide-menu" : ""}>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-160} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-160} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-150} duration={500}>
            <button>Contat us</button>
          </Link>
        </li>
      </ul>
      <>
        <img
          src={hamburger}
          alt=""
          onClick={toggleMenu}
          className="menu-icon"
        />
      </>
    </nav>
  );
};
export default Navbar;
