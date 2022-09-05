import React from 'react';
import '../css/Home.css';
import bgvideo from '../assets/home/background-video.mp4';

console.log(bgvideo);

const Home = () => {
	return (
		<div>
			<section className="showcase">
    		<video className="fullscreen-video background" src={bgvideo} muted loop autoPlay></video>
  		</section>
		</div>
	)
}

export default Home