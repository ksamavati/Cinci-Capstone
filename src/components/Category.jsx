import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LocationRenderer from './LocationRenderer';
import Carousel from "react-bootstrap/Carousel";
import '../css/Locations.css';
import { motion } from 'framer-motion';

const Locations = (props) => {
	const [locArr, setLocArr] = useState([]);
	const { cat } = useParams();

	// Runs once when compponent renders, equivalent to ComponentDidMount
	useEffect(() => {
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
	}, [cat]);

	return (
		<div>
    <Carousel className='my-carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1557771834-305b440777de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1598495886228-fedb44a5b5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"
					alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1633949969886-44f3be012a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

			<motion.div
				animate ={{ opacity: 1}}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				layout
			 className="row justify-content-center">
				<LocationRenderer locationsArray={locArr} />
			</motion.div>
		</div>
	)
}

export default Locations