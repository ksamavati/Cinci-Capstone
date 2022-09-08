import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container justify-content-between">
				<Link to='/' className="navbar-brand">Discover<b>Cincinnati</b></Link>
				{/* <!-- Hamburger button --> */}
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/locations">Locations</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/locationstest">LocationsTest</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/map">Map</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/contact">Contact</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/breweries">Breweries</Link>
						</li>
					</ul>
				</div>
				</div>
		</nav>

		// <nav>
		// 	<input type="checkbox" id="check" />
		// 	<label for="check" class="checkbtn">
		// 		<i class="fas fa-bars"></i>
		// 	</label>
		// 	<label class="logo dclogo"><Link className="nav-link" to="/">Discover<b>Cincinnati</b></Link></label>
		// 	<ul>
		// 		<li><Link className="nav-link" to="/">Home</Link></li>
		// 		<li><Link className="nav-link" to="/locations">Locations</Link></li>
		// 		<li><Link className="nav-link" to="/locationstest">LocationsTest</Link></li>
		// 		<li><Link className="nav-link" to="/map">Map</Link></li>
		// 		<li><Link className="nav-link" to="/contact">Contact</Link></li>
		// 	</ul>
		// </nav>
	)
}

export default Navbar