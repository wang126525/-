/**
 * 可视化组件,app为独立的一个命名空间
 *  ng.core
 *      Component
 *      Class
 */
(function(app){
  app.AppComponent = 
    ng.core.Component({
      selector:"my-app",
      template:"<h1>hello world!!!!!!!!!!!!!!!!!!!!!</h1>"
    }).
    Class({//实现组件本身的地方,组件添加属性和方法,会绑定到相应的视图和行为。
      constructor:function(){
        
      }
    })
})(window.app || (window.app = {}))
