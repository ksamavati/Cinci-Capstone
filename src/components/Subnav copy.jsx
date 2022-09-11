import React from 'react';
import { Link } from 'react-router-dom';

const Subnav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark slide-in-down" style={{paddingTop: 0}}>
			<div className="container justify-content-between">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<Link className="nav-link" to="/attractions">Attractions</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/sports">Sports</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/bars">Bars</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/breweries">Breweries</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/arts">Performing Arts</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/parks">Parks and Recreation</Link>
						</li>
					</ul>
				</div>
				</div>
		</nav>
	)
}

export default Subnav