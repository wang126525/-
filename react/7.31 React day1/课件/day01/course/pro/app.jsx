
var React = require("react");
var ReactDOM = require("react-dom");

require("./scss/main.scss");


var MainFooter = require("./md/MainFooter.jsx");

var App = React.createClass({
	render:function(){
		return (
			<div id="container">
				<header className = "header" id="header"></header>
				<div id="content"></div>
				<footer className = "footer" id="footer">
				</footer>
			</div>
		)
	}
})

/**
 * 如果footer内容不变，可以直接在构建虚拟DOM（组件）时直接以标签的形式调用，如果需要卸载这个组件的内容，那么需要使用的是下边的这种方式
 */
ReactDOM.render(<App />,document.getElementById("app"));
ReactDOM.render(<MainFooter />,document.getElementById("footer"));
