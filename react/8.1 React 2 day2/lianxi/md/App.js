
import "./../scss/main.scss"
 import React from "react";
 import ReactDon from "react-dom";
 import {Link,hashHistory} from "react-router"
 
export default class Home extends  React.Component{
   constructor(props) {
     super(props)
     this.state={
     	num:this.props.location.query.num
     }
     console.log(this.state.num)
   }
		componentWillMount(){
			 console.log(this.props.location.query.num)
		}
   render(){
     return (
       <div id="container">
          	{this.props.content}
          <footer id="footer">
           
            {this.props.footer}
          </footer>
       </div>
     )
   }
 }

