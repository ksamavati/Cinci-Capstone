import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;

	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		if (loc === "" || loc === undefined) {
			alert("Error: The app did not receive data for this location.");
		} else {
		axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJA-qv_um1QYgRAhCxo0Jd_1o')
			.then(response => {
				setMapsData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		}
	}, [loc]);

	return (
		<div>
		<button onClick={() => navigate(-1)}>Go back</button>
			<p>This is the One Location Page</p>
			<img src={loc.image} alt={"Photo of " + loc.name} />
			<p>{loc.name}</p>
			<p>{loc.address1}</p>
			<p>{loc.address2}</p>
			<p>{loc.phone}</p>
			<p>{loc.category}</p>
			<p>{loc.description}</p>
			<p>{mapsData.weekday_text}</p>
			
		</div>
	)
}

export default OneLocation