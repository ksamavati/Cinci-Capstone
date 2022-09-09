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
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJA-qv_um1QYgRAhCxo0Jd_1o"; // site that doesn’t send Access-Control-*
		fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
		.then(response => {setMapsData(response.data)})
		.then(contents => console.log(contents))
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


		// var config = {
		// 	method: 'get',
		// 	url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=YOUR_API_KEY',
		// 	headers: { }
		// };
		
		// axios(config)
		// .then(function (response) {
		// 	console.log(JSON.stringify(response.data));
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });


		// if (loc === "" || loc === undefined) {
		// 	alert("Error: The app did not receive data for this location.");
		// } else {
		// axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJA-qv_um1QYgRAhCxo0Jd_1o')
		// 	.then(response => {
		// 		setMapsData(response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		// }
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
			<p>{console.log(mapsData)}</p>
			
		</div>
	)
}

export default OneLocation