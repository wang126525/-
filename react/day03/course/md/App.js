import React from "react";
class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="container">
				<header className = "header" id="header"></header>
				<div id="content">
					{this.props.children}
				</div>
				<footer className = "footer" id="footer"></footer>
			</div>
		)
	}
}
export default App;