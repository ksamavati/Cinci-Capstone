import React from 'react';
import { motion } from 'framer-motion';
import '../css/Parallax.css';

const LocationRenderer = (props) => {
	const handleTouch = event => {
		event.curentTarget.classList.toggle('hover')
	}

	return props.locationsArray.map(location => {
		return (
		<motion.div
				layout
				animate={{opacity: 1}}
				initial={{opacity: 0}}
				exit={{opacity: 0}}
			 key={location.id} className='para-col lg-col-3' onTouchStart={handleTouch}>
							<div className="para-container">
					<div className="para-front" style={{backgroundImage: "url("+ location.image +")"}}>
						<div className="para-inner">
							<p>{location.name}</p>
							<span>{location.address1}</span>
						  <span>{location.address2}</span>
						  <span>{location.phone}</span>
						</div>
					</div>
					<div className="para-back">
						<div className="para-inner">
						  <p>{location.description}</p>
						</div>
					</div>
				</div>
		</motion.div>

		)
	});
}

export default LocationRenderer;