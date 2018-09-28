
import React from "react";
import ReactDOM from "react-dom";

import "./scss/main.scss";


import MainFooter from "./md/MainFooter.js";
import HomeContent from "./md/HomeContent.js";
class App extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div id="container">
				<header className = "header" id="header"></header>
				<div id="content"></div>
				<footer className = "footer" id="footer"></footer>
			</div>
		)
	}
}
ReactDOM.render(<App />,document.getElementById("app"));
ReactDOM.render(<MainFooter />,document.getElementById("footer"));
ReactDOM.render(<HomeContent />,document.getElementById("content"));