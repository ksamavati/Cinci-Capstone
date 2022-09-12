import React, { useEffect, useState } from 'react';
import LocationRenderer from './LocationRenderer';
import database from '../assets/db.json';
import Carousel from "react-bootstrap/Carousel";
import '../css/Locations.css';
import { motion } from 'framer-motion';


const LocationsTest = () => {
	const [locArr, setLocArr] = useState([]);
	const [carouselItems, setCarouselItems] = useState([]);
	
	// Runs once when compponent renders, equivalent to ComponentDidMount
	useEffect(() => {
		setLocArr(database);
	}, []);

	// Runs when locArr gets updated
	useEffect(() => {
		console.log(locArr.length);
		if (locArr.length !== 0 && typeof locArr !== 'undefined') {
		}
	}, [locArr]);

	const getCarouselItems = (locArr) => {
		return locArr.sort(() => 0.5 - Math.random()).map(location => {
			return (
			<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src={location.image}
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3>{location.name}</h3>
				<p>{location.description}</p>
				<p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p>
			</Carousel.Caption>
		</Carousel.Item>
		)
	});
	}

	return (
		<div style={{backgroundColor: "#224"}}>
    <Carousel>
		{getCarouselItems(locArr)}
    </Carousel>

			<motion.div
				animate ={{ opacity: 1}}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				layout
			 className="para-cols">
				<LocationRenderer locationsArray={locArr} />
			</motion.div>
		</div>
	)
}

export default LocationsTest