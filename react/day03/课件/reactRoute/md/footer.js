import React from "react"

export default 

class Footer extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<ul>
				<li>首页</li>
				<li>分类</li>
				<li>购物车</li>
				<li>个人中心</li>
				<li>更多</li>
			</ul>
		)
	}
}
