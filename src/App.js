import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Bars from './components/Breweries';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/locations" element={<Locations />} />
			</Routes>
			<Footer />
    </div>
  );
}

export default App;
