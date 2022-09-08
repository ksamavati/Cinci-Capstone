import React from 'react';
import { Link } from 'react-router-dom';

const Subnav = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container justify-content-between">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link className="nav-link" to="/attractions">Attractions</Link>
						</li>
						<li class="nav-item">
						<Link className="nav-link" to="/sports">Sports</Link>
						</li>
						<li class="nav-item">
						<Link className="nav-link" to="/bars">Bars</Link>
						</li>
						<li class="nav-item">
						<Link className="nav-link" to="/breweries">Breweries</Link>
						</li>
						<li class="nav-item">
						<Link className="nav-link" to="/arts">Performing Arts</Link>
						</li>
						<li class="nav-item">
						<Link className="nav-link" to="/parks">Parks and Recreation</Link>
						</li>
					</ul>
				</div>
				</div>
		</nav>
	)
}

export default Subnav