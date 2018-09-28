import "./scss/main.scss"
import React from "react";
import Reactdom from "react-dom";
import Footer from "./md/footer.js"

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div id="container"	>
				<header className="header">app头部</header>
				<div id="content"></div>
				<footer className="footer">
					<Footer/>
				</footer>
			</div>
		)
	}
}
Reactdom.render(<App/>,document.getElementById("app"))
