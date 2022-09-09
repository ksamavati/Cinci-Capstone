import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Subnav from './Subnav';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";


const Navbar = () => {
		const [isHovering, setIsHovering] = useState(false);
		const handleMouseOver = () => {
			setIsHovering(true);
		};
	
		const handleMouseOut = () => {
			setIsHovering(false);
		};

	
	return (
		<nav onMouseLeave={handleMouseOut}>
		<div className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container justify-content-between">
				<Link to='/' className="navbar-brand"
								onMouseOver={handleMouseOut}>Discover<b>Cincinnati</b></Link>
				{/* <!-- Hamburger button --> */}
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/"
								onMouseOver={handleMouseOut}>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/locations"
								onMouseOver={handleMouseOver}
								>Locations</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/locationstest"
								onMouseOver={handleMouseOut}
							>LocationsTest</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/map"
								onMouseOver={handleMouseOut}>Map</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact"
								onMouseOver={handleMouseOut}>Contact</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/breweries"
								onMouseOver={handleMouseOut}>Breweries</Link>
						</li>
					</ul>
				</div>
				</div>
		</div>
		{isHovering && <Subnav />}
		</nav>
	)
}

export default Navbar