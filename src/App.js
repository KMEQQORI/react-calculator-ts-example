import './App.css';
import { ReactCalculator } from 'react-calculator-ts';

function App() {
	return (
		<div className="container">
			<div className="example">
				<h1 className="header">Simple calculator</h1>
				<ReactCalculator type={'simple'} />
			</div>
			<div className="example">
				<h1 className="header">Scientific calculator</h1>
				<ReactCalculator type={'SCIENTIFIC'} />
			</div>
			<div className="example">
				<h1 className="header">Customizable colors</h1>
				<ReactCalculator
					type={'SCIENTIFIC'}
					numberButtonColor={'#557C56'}
					operationButtonColor={'#3C3D37'}
					equalButtonColor={'#A04747'}
					clearButtonColor={'#FF885B'}
					scientificButtonColor={'#697565'}
				/>
			</div>
		</div>
	);
}

export default App;
