import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Subnav from './Subnav';


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
		<div class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container justify-content-between">
				<Link to='/' className="navbar-brand"
								onMouseOver={handleMouseOut}>Discover<b>Cincinnati</b></Link>
				{/* <!-- Hamburger button --> */}
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link className="nav-link" to="/"
								onMouseOver={handleMouseOut}>Home</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/locations"
								onMouseOver={handleMouseOver}
								>Locations</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/locationstest"
								onMouseOver={handleMouseOut}
							>LocationsTest</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/map"
								onMouseOver={handleMouseOut}>Map</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/contact"
								onMouseOver={handleMouseOut}>Contact</Link>
						</li>
						<li class="nav-item">
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