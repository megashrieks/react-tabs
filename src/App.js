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
	tabs = ["tab 0", "tab 1", "tab 2"];
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
								/>
							);
						})}
					</div>
					<div className="content">
						{state.active === 0 && <p>Tab 0 content</p>}
						{state.active === 1 && <p>Tab 1 content</p>}
						{state.active === 2 && <p>Tab 2 content</p>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
