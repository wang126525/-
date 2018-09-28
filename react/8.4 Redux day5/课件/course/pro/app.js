import React from "react";
import ReactDOM from "react-dom";



import App from "./md/App.js";

import store from "./store/store.js";


function renderApp(){
	ReactDOM.render(<App />,document.getElementById("app"))
}
renderApp();
store.subscribe(renderApp);