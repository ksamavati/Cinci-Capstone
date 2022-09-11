import React from 'react';
import { Link } from 'react-router-dom';

const Subnav = () => {
	return (
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
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
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
	)
}

export default Subnav