app.config(["$stateProvider",function($stateProvider){
  var user = {
        name: 'user',
        url: '/user',
        component:"user"
      }
  var home = {
        name: 'home',
        url: '/home',
        component:"home"
      }
  $stateProvider.state(home);
  $stateProvider.state(user);
}])