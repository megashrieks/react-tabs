import React, { Component } from "react";
import "./App.css";
import TabHeader from "./components/TabHeader/TabHeader";

class App extends Component {
	state = {
		active: 0
	};
	select = id => {
		this.setState({
			active: id
		});
	};
	tabs = ["lemons", "life", "acnologia"];
	render() {
		let state = this.state;
		return (
			<div className="App">
				<div className="centered">
					<div className="headers">
						{this.tabs.map((e, i) => {
							return (
								<TabHeader
									title={e}
									id={i}
									active={state.active}
									select={this.select}
									key={i}
								/>
							);
						})}
					</div>
					<div className="content">
						{state.active === 0 && <p>
							When life gives you lemons,make lemonade.
						</p>}
						{state.active === 1 && <p>
							The existence of life is meaningless
						</p>}
						{state.active === 2 && <p>Some other 
							words of
							wisdom that will make you think i am
							old and wise</p>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
