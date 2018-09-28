var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    //constructor(public name:string,age:number,height:number,weight:number){
    //  this.name = name;
    //  this.age = age;
    //  this.height = height;
    //  this.weight = weight;
    //}
    function Person(name, age, height) {
        this.name = name;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = 200;
    }
    Person.prototype.say = function () {
        return this.name + "的年龄为:" + this.age + ",体重为：" + this.weight + ",身高为：" + this.height;
    };
    return Person;
}());
var XiaSong = (function (_super) {
    __extends(XiaSong, _super);
    function XiaSong(name, age, height) {
        var _this = _super.call(this, name, age, height) || this;
        _this.name = name;
        _this.action = "尬舞";
        return _this;
    }
    XiaSong.prototype.say = function () {
        return this.name + "的年龄为:" + this.age + ",体重为：" + this.weight + ",身高为：" + this.height + "一言不合就" + this.action;
    };
    XiaSong.prototype.test = function () {
        return _super.prototype.say.call(this);
    };
    return XiaSong;
}(Person));
var person = new XiaSong("夏松", 18, 175);
console.log(person.say());
console.log(person.test());
