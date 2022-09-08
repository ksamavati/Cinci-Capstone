import './App.css';
import Navbar from './components/Navbar';
import Subnav from './components/Subnav';
import Home from './components/Home';
import Footer from './components/Footer';
import Breweries from './components/Breweries';
import Category from './components/Category';
import Locations from './components/Locations';
import LocationsTest from './components/LocationsTest';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
			<header>
				<Navbar />
				<Subnav />
			</header>
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/locations" element={<Locations />} /> */}
					<Route path="/locations" element={<Category />} />
					<Route path="/breweries" element={<Breweries />} />
					<Route path="/locationstest" element={<LocationsTest />} />
					<Route path="/:cat" element={<Category />} />
				</Routes>
			</main>
			<Footer />
    </div>
  );
}

export default App;
