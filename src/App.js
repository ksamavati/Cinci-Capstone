import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Breweries from './components/Breweries';
import Category from './components/Category';
import MapPage from './components/MapPage';
import Locations from './components/Locations';
import LocationsTest from './components/LocationsTest';
import OneLocation from './components/OneLocation';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route path="/locations" element={<Locations />} /> */}
					<Route path="/locations" element={<Category />} />
					<Route path="/map" element={<MapPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/breweriesPage" element={<Breweries />} />
					<Route path="/locationstest" element={<LocationsTest />} />
					<Route path="/destination-:id" element={<OneLocation />} />
					<Route path="/:cat" element={<Category />} />
				</Routes>
			</main>
			<Footer />
    </div>
  );
}

export default App;
