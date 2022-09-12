import React from 'react';
import { motion } from 'framer-motion';
import '../css/Parallax.css';

const LocationRenderer = (props) => {
	return props.locationsArray.map(location => {
		return (
		<motion.div
				layout
				animate={{opacity: 1}}
				initial={{opacity: 0}}
				exit={{opacity: 0}}
			 key={location.id} className='para-col lg-col-3' onTouchStart="this.classList.toggle('hover');">
							<div class="para-container">
					<div class="para-front" style={{backgroundImage: "url("+ location.image +")"}}>
						<div class="para-inner">
							<p>{location.name}</p>
							<span>{location.address1}</span>
						  <span>{location.address2}</span>
						  <span>{location.phone}</span>
						</div>
					</div>
					<div class="para-back" style={{backgroundImage: "url("+ location.image +")"}}>
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