import React from "react";
import {DatePicker,Alert,Timeline,Rate  } from "antd";
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      val:0
    }
  }
  
  getData(value){
    console.log(value)
  }
  render(){
    
    return (
      <div>
        <h1>todolist</h1>
        <hr/>
        <DatePicker />
         <Alert message="Success Text" type="error" />
         <Timeline>
        <Timeline.Item color="green">订单完成</Timeline.Item>
        <Timeline.Item color="green">配送中</Timeline.Item>
        <Timeline.Item color="red">
          <p>骑手已取货</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>商家已接单</p>
        </Timeline.Item>
      </Timeline>
      <Rate allowHalf defaultValue={0} count = {5}  onChange = {this.getData.bind(this)}/>
      </div>
    )
  }
}
