import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import axios from 'axios';

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;
	let placeID = "";

	//get data from Google Maps API
	const getData = async () => {
				//get Place ID
				var config1 = {
					method: 'get',
					url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + loc.name + '&inputtype=textquery&locationbias=point:39.1031,84.5120&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
					headers: { 
						'Accept': 'application/json'
					}
				};
				
				await axios(config1)
				.then(function (response) {
					let theData = response.data;
					placeID = theData.candidates[0].place_id;
				})
				.catch(function (error) {
					console.log(error);
				});
		
				console.log(placeID);
				//get Place Details
				var config2 = {
					method: 'get',
					url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeID + '&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
					headers: { 
						'Accept': 'application/json'
					}
				};
				
				await axios(config2)
				.then(function (response) {
					// setMapsData(response.data);
					let theData = response.data;
					setMapsData(theData.result);
				})
				.catch(function (error) {
					console.log(error);
				});
	}

	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		getData();	
	}, [loc]);

	const getReviews = (reviewArr) => {
		return reviewArr.map(rvw => {
			return(
				<div>
				<p><img src={rvw.profile_photo_url} style={{maxHeight: '40px', maxWidth: '40px'}} /><a href={rvw.author_url}>{rvw.author_name}</a></p>
				<p>Rating: {rvw.rating}</p>
				<p>{rvw.relative_time_description}</p>
				<p>{rvw.text}</p>
				</div>
			)
		});
	}

	if (mapsData.length === 0) {
		return (<div>Loading...</div>)
	} else {
	return (
		<div>
		<Carousel>
		{mapsData.photos.map(photo => {
			return(
				<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=2560&photo_reference=" + photo.photo_reference +  "&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"}
				alt={loc.name}
			/>
			<Carousel.Caption>
				<h1>{loc.name}</h1>
				{/* <p>{location.description}</p> */}
			</Carousel.Caption>
		</Carousel.Item>

			)
		})}
    </Carousel>
		<button onClick={() => navigate(-1)}>Go back</button>
			{/* <img src={loc.image} alt={"Photo of " + loc.name} /> */}
			<p>Name: {loc.name}</p>
			<p>Address: {loc.address1}</p>
			<p>{loc.address2}</p>
			<p>Phone: {loc.phone}</p>
			{/* <p>Category: {loc.category}</p> */}
			<p>{loc.description}</p>
			<p><a href={mapsData.url}>View on Google Maps</a></p>
			<p>Website: <a href={mapsData.website}>{mapsData.website}</a></p>
			<p>{mapsData.opening_hours.weekday_text.map(line => {
				return (<p>{line}</p>)
			})}</p>
			<p>Average Rating: {mapsData.rating}</p>
			<p>Total Ratings: {mapsData.user_ratings_total}</p>
			<p>Reviews:</p>
			{getReviews(mapsData.reviews)}

			
		</div>
	)
}
}

export default OneLocation