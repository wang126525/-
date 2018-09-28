app.component("home",{
  templateUrl:"./views/home.html",
  controller:function($scope,myAjax){
    $scope.registerNum = 0;
    var url = "http://localhost:3000/userlist";
    myAjax.fetch(url,function(data){
      console.log(data);
      $scope.registerNum = data.length;
      $scope.$apply();
    },function(err){
      console.log(err)
    })
  }
})
