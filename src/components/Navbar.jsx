import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
		<input type="checkbox" id="check" />
	<label for="check" class="checkbtn">
		<i class="fas fa-bars"></i>
	</label>
	<label class="logo"><Link className="nav-link" to="/">Discover <b>Cincinnati</b></Link></label>
	<ul>
		<li><Link className="nav-link" to="/">Home</Link></li>
		<li><Link className="nav-link" to="/locations">Locations</Link></li>
		<li><Link className="nav-link" to="/map">Map</Link></li>
		<li><Link className="nav-link" to="/contact">Contact</Link></li>
	</ul>
</nav>
	)
}

export default Navbar