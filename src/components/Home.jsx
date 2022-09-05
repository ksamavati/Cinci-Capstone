import React from 'react';
import '../css/Home.css';
import bgvideo from '../assets/home/homevideo.mov';

console.log(bgvideo);

const Home = () => {
	return (
		<div>
			<section className="showcase">
    		<video className="fullscreen-video background" src={bgvideo} muted loop autoPlay></video>
				{/*
				<video loop autoPlay>
					<source src= { bgvideo } type="video/mp4" />Your browser does not support the video tag.
				</video>*/}
  		</section>
		</div>
	)
}

export default Home