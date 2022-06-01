import icon from './electron.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={icon} alt="electron"/>
				<p>
					Autoupdater Demo v{process.env.REACT_APP_VERSION}
				</p>
			</header>
		</div>
	);
}

export default App;
