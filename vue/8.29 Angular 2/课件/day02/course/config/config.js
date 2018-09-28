app.config(['$routeProvider', function($routeProvider){
              $routeProvider
//            .when('/',{template:'这是首页页面'})
//            .when('/computers',{template:'这是电脑分类页面'})
//            .when('/printers',{template:'这是打印机页面'})
              .when("/",{
                templateUrl:"./route/home.html",
                controller: 'homeCtrl'
              })
              .when("/computers",{
                templateUrl:"./route/computers.html"
              })
              .when("/printers",{
                templateUrl:"./route/printers.html"
              })
              .otherwise({redirectTo:'/'});
          }]);
          
/* 
 * templateUrl  相对于跟页面的路径
 * controller: 'homeCtrl'    要加引号
 */