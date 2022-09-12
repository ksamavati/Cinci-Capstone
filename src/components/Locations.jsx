import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationRenderer from './LocationRenderer';
import '../css/Locations.css';

const Locations = () => {
	const [locArr, setLocArr] = useState([]);

	// Runs once when compponent renders, equivalent to ComponentDidMount
	useEffect(() => {
		axios.get('/locationsdb/')
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			{/* <div className="row row-cols-2 row-cols-lg-5 row-cols-xl-6 g-4 justify-content-center"> */}
			<div className="row locations-row justify-content-center">
				{/* {locationsJSX} */}
				<LocationRenderer locationsArray={locArr} />
			</div>
		</div>
	)
}

export default Locations