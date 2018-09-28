import { Component } from '@angular/core';
import { User } from './user.js';
@Component({
  selector: 'my-test',
/*  template: '<h1>测试组件</h1>'*/
  templateUrl: "./app/test.html"
})
export class AppTest { 
  msg = "1111111111111111";
  list = ["a","b","c"];
//users = [
//  {id:1,name:"aaa"},
//  {id:2,name:"bbb"},
//  {id:3,name:"ccc"}
//];
  users = [
    new User(1,"aaa"),
    new User(2,"bbb"),
    new User(3,"ccc"),
    new User(4,"ddd"),
  ];
  isOk = false;
  test(){
//  alert("2222");
      this.isOk = !this.isOk;
  }
}