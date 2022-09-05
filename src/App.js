import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Locations from './components/Locations';
import LocationsTest from './components/LocationsTest';
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
					<Route path="/contact" element={<Contact />} />
					<Route path="/locations" element={<Locations />} />
					<Route path="/locationstest" element={<LocationsTest />} />
				</Routes>
			</main>
			<Footer />
    </div>
  );
}

export default App;
