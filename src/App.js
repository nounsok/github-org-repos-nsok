import './styles/css/styles.css';
import Navbar from './components/subComponents/NavBar';
import Home from './components/Home';

function App() {
	return (
		<div className='app'>
			<div className='wrapper'>
				<Navbar />
				<Home />
			</div>
		</div>
	);
}

export default App;
