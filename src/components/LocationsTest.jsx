import React, { useEffect, useState } from 'react';
import LocationRenderer from './LocationRenderer';
import database from '../assets/db.json';
import '../css/Locations.css';


const LocationsTest = () => {
	const [locArr, setLocArr] = useState([]);
	
	// Runs once when compponent renders, equivalent to ComponentDidMount
	useEffect(() => {
		setLocArr(database);
	}, []);

	return (
		<div>
		
			{/* <div className="row row-cols-2 row-cols-lg-5 row-cols-xl-6 g-4 justify-content-center"> */}
			<div className="row justify-content-center">
				{/* {locationsJSX} */}
				<LocationRenderer locationsArray={locArr} />
			</div>
		</div>
	)
}

export default LocationsTest