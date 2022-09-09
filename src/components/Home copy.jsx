import React from 'react';
import '../css/Home.css';
import bgvideo from '../assets/home/landingvideo.mp4';

const Home = () => {
	return (
		<div>
			<section className="my-video-container" id="section1">
    		<video className="my-fullscreen-video my-background" src={bgvideo} muted loop autoPlay></video>
				<h1 className="text-white my-tagline">A city full of history, culture, and fun!</h1>
  		</section>
			<section className='my-center' id='section2'>
				<h4 className='my-section2-tagline'>Come explore Cincinnati and discover all the hidden gems this city has to offer!</h4>
			</section>
		</div>
	)
}

export default Home