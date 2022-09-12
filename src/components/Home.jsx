import React from 'react';
import '../css/Home2.css';
import bgvideo from '../assets/home/landingvideo.mp4';

import aboutus from '../assets/home/aboutus.jpg';
import arts from '../assets/home/arts.jpg';
import attractions from '../assets/home/attractions.jpg';
import backgroundVideo from '../assets/home/background-video.mp4';
import bars from '../assets/home/bars.jpg';
import boat from '../assets/home/boat.jpg';
import booknow from '../assets/home/booknow.jpg';
import castle from '../assets/home/castle.jpg';
import discover from '../assets/home/discover.jpg';
import footer from '../assets/home/footer.jpg';
import go from '../assets/home/go.jpg';
import packages from '../assets/home/packages.jpg';
import pic1 from '../assets/home/pic-1.png';
import pic2 from '../assets/home/pic-2.png';
import pic3 from '../assets/home/pic-3.png';
import pic4 from '../assets/home/pic-4.png';
import pic5 from '../assets/home/pic-5.png';
import pic6 from '../assets/home/pic-6.png';
import sports from '../assets/home/sports.jpg';
import story from '../assets/home/story.jpg';
import tour from '../assets/home/tour.jpg';
import travel from '../assets/home/travel.jpg';

console.log(bgvideo);

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

<section class="home-about">
    <div class="image">
        <img src={story} alt="" />
    </div>
    <div class="content">
        <h3>about us</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quia maxime, inventore atque dolor tempore rem aut nam fugiat distinctio?</p>
        <a href="about.html" class="btn">read more</a>
    </div>
</section>
<section class="home-packages">
    <h1 class="heading-title">our packages</h1>
    <div class="box-container">
        <div class="box">
            <div class="image">
                <img src={boat} alt="" />
            </div>
            <div class="content">
                <h3>adventure & tour</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="book.html" class="btn">book now</a>
            </div>
        </div>

        <div class="image">
                <img src={go} alt="" />
            </div>
            <div class="content">
                <h3>adventure & tour</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="book.html" class="btn">book now</a>
            </div>

        <div class="image">
                <img src={castle} alt="" />
            </div>
            <div class="content">
                <h3>adventure & tour</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="book.html" class="btn">book now</a>
            </div>
    </div>

    <div class="load-more"><a href="package.html" class="btn">load more</a></div>
</section>
<div class="home-offer">
    <div class="content">
        <h3>upto 50% off</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo error voluptate placeat odit debitis repudiandae magni quos assumenda natus modi?</p>
        <a href="book.html" class="btn">book now</a>
    </div>
</div>
<section class="footer">
    <div class="box-container">
        <div class="box">
            <h3>quick links</h3>
        <a href="home.html"><i class="fas fa-angle-right"></i>home</a>
        <a href="about.html"><i class="fas fa-angle-right"></i>about</a>
        <a href="package.html"><i class="fas fa-angle-right"></i>package</a>
        <a href="book.html"><i class="fas fa-angle-right"></i>book</a>
        </div>
        <div class="box">
            <h3>extra links</h3>
            <a href="#"><i class="fas fa-angle-right"></i>ask questions</a>
            <a href="#"><i class="fas fa-angle-right"></i>about us</a>
            <a href="#"><i class="fas fa-angle-right"></i>privacy policy</a>
            <a href="#"><i class="fas fa-angle-right"></i>terms of use</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#"><i class="fas fa-phone"></i> +123-456-7890</a>
            <a href="#"><i class="fas fa-phone"></i> +111-222-3333</a>
            <a href="#"><i class="fas fa-envelope"></i> ouremail@gmail.com</a>
            <a href="#"><i class="fas fa-map"></i> cincinnati, ohio - 45236</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="https://twitter.com/cityofcincy"><i class="fab fa-twitter"></i>twitter</a>
            <a href="https://www.facebook.com/DowntownCincinnati"><i class="fab fa-facebook-f"></i>facebook</a>
            <a href="https://www.instagram.com/city_of_cincinnati/?hl=en"><i class="fab fa-instagram"></i>instagram</a>
            <a href="https://www.pinterest.com/pin/cincinnaticom-official-travel-guide-of-cincinnati--342555115378863777/"><i class="fab fa-pinterest"></i>pinterest</a>
            <a href="https://www.reddit.com/r/cincinnati/"><i class="fab fa-reddit"></i>reddit</a>
            <a href="https://www.linkedin.com/company/city-of-cincinnati/"><i class="fab fa-linkedin"></i>linkedin</a>
        </div>

    </div>

    <div class="credit">created by <span>software engineer vera</span> | all rights reserved! </div>
</section>
		</div>
	)
}

export default Home