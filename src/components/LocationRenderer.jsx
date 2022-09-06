import React from 'react';
import img1 from '../assets/ImgAttractions/cincinnati-zoo1.png';

const LocationRenderer = (props) => {
	return props.locationsArray.map(location => {
		return (
			// <div key={location.id} className='card my-3 mx-5' style={{ color: "inherit", textDecoration: "inherit" , maxWidth: "280px"}}>
			<div key={location.id} className='card my-3 mx-5' style={{ color: "inherit", textDecoration: "inherit" , 
			maxWidth: "350px"}}>
			<img className="card-img-top" src={img1} alt={"photo of " + location.name} style={{overflow: "hidden", objectFit: "cover"}} />
			<div className="card-body">
				<h5 className="card-title">{location.name}</h5>
				<p className="card-text">{location.description}</p>
				<button className="btn btn-primary">Read More &raquo;</button>
			</div>
		</div>
		)
	});
}

export default LocationRenderer;