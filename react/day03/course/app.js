import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,Link,hashHistory} from "react-router";

import "./scss/main.scss";
import MainFooter from "./md/MainFooter.js";
import HomeContent from "./md/HomeContent.js";
import KindContent from "./md/KindContent.js";
import CartContent from "./md/CartContent.js";
import UserContent from "./md/UserContent.js";
import MoreContent from "./md/MoreContent.js";
import App from "./md/App.js";

ReactDOM.render((<Router history = {hashHistory}>
					<Route path="/" component={App}>
						<Route path="home" component={HomeContent} />
						<Route path="kind" component={KindContent} />
						<Route path="cart" component={CartContent} />
						<Route path="user" component={UserContent} />
						<Route path="more" component={MoreContent} />
					</Route>
				</Router>),document.getElementById("app"));
ReactDOM.render(<MainFooter />,document.getElementById("footer"));
