import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;



	
	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJA-qv_um1QYgRAhCxo0Jd_1o"; // site that doesn’t send Access-Control-*
		fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
		.then(response => {setMapsData(response.data)})
		.then(contents => console.log(contents))
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}, [loc]);

	return (
		<div>
		<button onClick={() => navigate(-1)}>Go back</button>

		<Carousel>
		<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src='assets/img/course-1.jpg'
				alt="First slide"
			/>
			<Carousel.Caption>
				{/* <h3>{location.name}</h3> */}
				{/* <p>{location.description}</p> */}
				{/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src='assets/img/course-2.jpg'
				alt="First slide"
			/>
			<Carousel.Caption>
				{/* <h3>{location.name}</h3> */}
				{/* <p>{location.description}</p> */}
				{/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src='assets/img/course-3.jpg'
				alt="First slide"
			/>
			<Carousel.Caption>
				{/* <h3>{location.name}</h3> */}
				{/* <p>{location.description}</p> */}
				{/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
			</Carousel.Caption>
		</Carousel.Item>
    </Carousel>


			<p>This is the One Location Page</p>
			<img src={loc.image} alt={"Photo of " + loc.name} />
			<p>{loc.name}</p>
			<p>{loc.address1}</p>
			<p>{loc.address2}</p>
			<p>{loc.phone}</p>
			<p>{loc.category}</p>
			<p>{loc.description}</p>
			<p>{console.log(mapsData)}</p>
			
		</div>
	)
}

export default OneLocation