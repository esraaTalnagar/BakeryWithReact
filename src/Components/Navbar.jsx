import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/bakery-color.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top overflow-auto"
    >
      <div className="d-flex justify-content-between w-100 align-items-center">
        <Link
          className="navbar-brand ms-lg-5 ms-sm-0 w-lg-50 w-sm-25"
          to="/"
        >
          <img className="w-50" id="logo" src={Logo} alt="Bakery" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-black"  to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/offer">
                Our offer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
