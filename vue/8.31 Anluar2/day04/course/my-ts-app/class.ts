class Person {
  public weight:number;
  height:number;
//name:string;
  age:number;
  
  
//constructor(public name:string,age:number,height:number,weight:number){
//  this.name = name;
//  this.age = age;
//  this.height = height;
//  this.weight = weight;
//}
  constructor(public name:string,age:number,height:number){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = 200;
  }
  
  say(){
    return this.name + "的年龄为:" + this.age +",体重为：" + this.weight + ",身高为：" + this.height;
  }
}

class XiaSong extends Person {
  action:string;
  constructor(public name:string,age:number,height:number){
    super(name,age,height);
    this.action = "尬舞";
  }
  say(){
    return this.name + "的年龄为:" + this.age +",体重为：" + this.weight + ",身高为：" + this.height+"一言不合就"+this.action;
  }
  test(){
    return super.say();
  }
}

var person = new XiaSong("夏松",18,175);

console.log(person.say());
console.log(person.test());
