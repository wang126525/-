app.component("user",{
  templateUrl:"./views/user.html",
  controller:function($scope,myAjax){
    $scope.list = [];
    $scope.number = 2; //每页显示个数
    $scope.pageNum = 0; //显示第几页
    $scope.totalNum = 0; //总共几页
    $scope.btnArr = []; //生成页数按钮
    
    $scope.$watch("number",function(){
      $scope.totalNum = Math.ceil($scope.list.length / $scope.number);
      $scope.btnArr = [];
      for(var i = 0; i < $scope.totalNum; i++){
        $scope.btnArr.push(i + 1)
      }
    })
    var url = "http://localhost:3000/userlist";
    //第一次获取列表
    myAjax.fetch(url,function(data){
      console.log(data);
      //聊表填充数据
      $scope.list = data;
      //总页数
      $scope.totalNum = Math.ceil(data.length / $scope.number);
      //生成按钮
      for(var i = 0; i < $scope.totalNum; i++){
        $scope.btnArr.push(i + 1)
      }
      //强制更新
      $scope.$apply();
    },function(err){
      console.log(err)
    })
    
    $scope.deleteItem = function(item,index){
      console.log(item);
      var url = "http://localhost:3000/deleteuser?username="+item.username;
      myAjax.fetch(url,function(data){
        if(data == 1){
          console.log("删除成功");
          $scope.list.splice(index,1);
          $scope.$apply();
        }
      },function(err){
        console.log(err)
      })
    }
    
    $scope.changeNum = function(index){
      $scope.pageNum = index;
    }
  }
})
