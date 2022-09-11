import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationRenderer from './LocationRenderer';
import Carousel from "react-bootstrap/Carousel";
import '../css/Locations.css';
import { motion } from 'framer-motion';
import localdb from '../assets/db.json';

const Category = (props) => {
	const [locArr, setLocArr] = useState([]);
	const { cat } = useParams();
	const carouselLocations = [];

	// Runs once when compponent renders, and again when you toggle category
	useEffect(() => {
		// if running on Heroku, do a backend call
		console.log(process.env.NODE_ENV);
		if (process.env.NODE_ENV === 'development') {
			if (cat === "" || cat === undefined) {
				// setLocArr(localdb);
				axios.get('https://discovercincinnati.herokuapp.com/locationsdb/')
				.then(response => {
					setLocArr(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
			} else {
			// setLocArr(localdb.filter((location)=>{return location.category == cat}));
			axios.get('https://discovercincinnati.herokuapp.com/locationsdb/' + cat)
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		};
		} else {
		// If no category, load all locations
		if (cat === "" || cat === undefined) {
			axios.get('/locationsdb/')
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		} else {
		axios.get('/locationsdb/' + cat)
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		}
		}
	}, [cat]);

	// Runs when locArr gets updated
	useEffect(() => {
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

export default Category