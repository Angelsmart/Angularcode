app.controller("loginCtrl",function($scope,$location){
  $scope.user="";
  $scope.pass="";
  $scope.name=/^[a-z]+\w+$/;
  $scope.num=/^\d{6,}$/;
  $scope.btn = function(){
    if($scope.name.test($scope.user)){

    }else{
      alert('用户名必须开头是小字母')
    }
    if($scope.num.test($scope.pass)){

    }else{
      alert('密码最少六位数字')
    }
    if($scope.name.test($scope.user)&&$scope.num.test($scope.pass)){
      $location.path('/home')
    }
  }
})