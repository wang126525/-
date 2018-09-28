"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_js_1 = require("./user.js");
var AppTest = (function () {
    function AppTest() {
        this.msg = "1111111111111111";
        this.list = ["a", "b", "c"];
        //users = [
        //  {id:1,name:"aaa"},
        //  {id:2,name:"bbb"},
        //  {id:3,name:"ccc"}
        //];
        this.users = [
            new user_js_1.User(1, "aaa"),
            new user_js_1.User(2, "bbb"),
            new user_js_1.User(3, "ccc"),
            new user_js_1.User(4, "ddd"),
        ];
        this.isOk = false;
    }
    AppTest.prototype.test = function () {
        //  alert("2222");
        this.isOk = !this.isOk;
    };
    AppTest = __decorate([
        core_1.Component({
            selector: 'my-test',
            /*  template: '<h1>测试组件</h1>'*/
            templateUrl: "./app/test.html"
        })
    ], AppTest);
    return AppTest;
}());
exports.AppTest = AppTest;
//# sourceMappingURL=app.test.js.map