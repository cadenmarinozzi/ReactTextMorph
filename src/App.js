import TextMorph from "./lib/ReactTextMorph";
import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			morphState: false,
		};
	}

	handleMorphIn() {
		this.setState({
			morphState: true,
		});
	}

	handleMorphOut() {
		this.setState({
			morphState: false,
		});
	}

	render() {
		return (
			<>
				<div className="morph-container">
					<TextMorph
						text="Hello World!"
						morphText="Morphed..."
						className="example-text"
						morphTextColor="red"
						morphState={this.state.morphState}
						onMouseOver={this.handleMorphIn.bind(this)}
						onMouseOut={this.handleMorphOut.bind(this)}
					/>
				</div>
				<span>Hover {">"}</span>
			</>
		);
	}
}

export default App;
