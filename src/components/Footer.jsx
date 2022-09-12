import React from 'react';
import '../css/Footer.css';


const Footer = () => {
	return (
		<footer>
  		<div className="rounded-social-buttons">
      <a className="social-button facebook" href="https://www.facebook.com/DowntownCincinnati" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
      <a className="social-button twitter" href="https://twitter.com/cityofcincy" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-twitter"></i></a>
      <a className="social-button linkedin" href="https://www.linkedin.com/company/city-of-cincinnati/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-linkedin"></i></a>
      <a className="social-button pinterest" href="https://www.pinterest.com/pin/342555115378863777/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-pinterest"></i></a>
      <a className="social-button reddit" href="https://www.reddit.com/r/cincinnati/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-reddit"></i></a>
      <a className="social-button instagram" href="https://www.instagram.com/city_of_cincinnati/?hl=en" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-instagram"></i></a>
      </div>
		</footer>
	)
}

export default Footer