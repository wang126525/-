interface Person {
  name:string;
  age:number;
  sex:string;
}


function test(person:Person){
  return person.name + "的年龄为" + person.age + "性别"+ (person.sex == "-1" ? "不详" : "女");
}

document.getElementsByTagName("body")[0].innerHTML = "" + test({name:"刘程皓",age:38,sex:"1"});