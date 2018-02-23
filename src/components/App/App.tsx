import * as React from 'react';
import './App.css';
import { Race } from '../Race/Race';

interface Props {
}

interface State {
	startRandom: boolean;
	reset: boolean;
}

export class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			startRandom: false,
			reset: false
		};
		// this.startClick = this.startClick.bind(this);
	}

	randomClick = () => {
		this.setState({startRandom: true});
	}

	resetClick = () => {
		this.setState({ startRandom: false});
	}

	render() {
		const Buttons = () => (
			<div className="App-buttons">
				<button className="ui teal basic button" onClick={this.randomClick}>Start</button>
				<button className="ui button" onClick={this.resetClick}>Reset</button>  
			</div>
		);
		
		return (
			<div className="App" >
				<header className="App-header" >
					<img src={require('../../images/logo.svg')} className="App-logo" alt="logo" />
					<h1 className="App-title" > React / Typescript </h1>
					
				</header>
				<Buttons />
				<Race 
					reset={this.state.reset} 
					startRandom={this.state.startRandom}
				/>
			</div>
		);
	}
}