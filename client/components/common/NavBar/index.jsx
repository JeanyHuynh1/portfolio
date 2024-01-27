import { Link } from "react-router-dom";

import './styles.css'

const NavBar = () => {
	return (
		<div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
		</div>
	);
};

export default NavBar;
