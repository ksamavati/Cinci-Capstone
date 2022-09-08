import React from 'react';
import img1 from '../assets/ImgAttractions/cincinnati-zoo1.png';
import { motion } from 'framer-motion';
import '../css/Parallax.css';

const LocationRenderer = (props) => {
	return props.locationsArray.map(location => {
		return (
			// <div key={location.id} className='card my-3 mx-5' style={{ color: "inherit", textDecoration: "inherit" , maxWidth: "280px"}}>
		// 	<motion.div
		// 		layout
		// 		animate={{opacity: 1}}
		// 		initial={{opacity: 0}}
		// 		exit={{opacity: 0}}
		// 	 key={location.id} className='card my-3 mx-5' style={{ color: "inherit", textDecoration: "inherit" , 
		// 	maxWidth: "350px"}}>
		// 	<img className="card-img-top" src={img1} alt={"photo of " + location.name} style={{overflow: "hidden", objectFit: "cover"}} />
		// 	<div className="card-body">
		// 		<h5 className="card-title">{location.name}</h5>
		// 		<p className="card-text">{location.description}</p>
		// 		<button className="btn btn-primary">Read More &raquo;</button>
		// 	</div>
		// </motion.div>
		<motion.div
				layout
				animate={{opacity: 1}}
				initial={{opacity: 0}}
				exit={{opacity: 0}}
			 key={location.id} className='para-col lg-col-3' onTouchStart="this.classList.toggle('hover');">
							<div class="para-container">
					<div class="para-front" style={{backgroundImage: "url("+ img1 +")"}}>
						<div class="para-inner">
							<p>{location.name}</p>
							<span>{location.address1}</span>
						  <span>{location.address2}</span>
						  <span>{location.phone}</span>
						</div>
					</div>
					<div class="para-back">
						<div class="para-inner">
						  <p>{location.description}</p>
						</div>
					</div>
				</div>
		</motion.div>

		)
	});
}

export default LocationRenderer;