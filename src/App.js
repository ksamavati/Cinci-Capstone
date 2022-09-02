import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Locations from './components/Locations';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
			<Navbar />
      <header className="Main-header">
				Cincinnati Tourism
      </header>
			<Locations />
			<Contact />
			<Footer />
    </div>
  );
}

export default App;
