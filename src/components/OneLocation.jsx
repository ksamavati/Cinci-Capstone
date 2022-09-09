import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneLocation = () => {
	// const [locArr, setLocArr] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;

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
			
		</div>
	)
}

export default OneLocation