import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Category from './components/Category';
import MapPage from './components/MapPage';
import LocationsTest from './components/LocationsTest';
import OneLocation from './components/OneLocation';
import Contact from './components/Contact';
import Boxes from './components/Boxes';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
	const [renderFooter, setRenderFooter] = useState(true);

	useEffect(() => {
		if (window.location.pathname == './map') {
			setRenderFooter(false);
		} else {
			setRenderFooter(true);
			
		}
	}, [window.location.pathname]);

  return (
    <div className="App">
			<Navbar />
			<div className="nav-offset" />
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route path="/locations" element={<Locations />} /> */}
					<Route path="/locations" element={<Category />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/locationstest" element={<LocationsTest />} />
					<Route path="/boxes" element={<Boxes />} />
					<Route path="/destination-:id" element={<OneLocation />} />
					<Route path="/:cat" element={<Category />} />
				</Routes>
			</main>
			{console.log(window.location.pathname)}
			{renderFooter && <Footer />}
			{/* <Footer /> */}
    </div>
  );
}

export default App;
