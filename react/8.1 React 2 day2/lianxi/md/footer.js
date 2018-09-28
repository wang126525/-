import React from "react"
import {Link,hashHistory} from "react-router"
export default
  class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
		change(index){
			hashHistory.push({
				pathname:"/home",
				query:{
					num:index
				}
			})
		}
    render(){
    	var that=this
      return (
        <ul>
          <li onClick={that.change.bind(that,1)}>首页</li>
          <li><Link activeClassName="active" to="/kind">分类</Link></li>
          <li><Link activeClassName="active" to="/cart">购物车</Link></li>
          <li><Link activeClassName="active" to="/user">个人中心</Link></li>
          <li><Link activeClassName="active" to="/more">更多</Link></li>
        </ul>
      )
    }


  }
