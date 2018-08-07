app.controller("headerCtrl",function($scope,$http){
  $http.get('./json/data.json').then(function(response){
    console.log(response);
    $scope.navs = response.data.navs;
    $scope.menus = response.data.menus;
  }).catch(function(error){
    console.log(error)
  })
  $scope.navs = []
  $scope.menus = []
  $scope.men=document.querySelector('.menu');
  $scope.men.style.height=0;
  $scope.over = function(index){
    $scope.index=index;
    $scope.H=['495','289','305','286','503','250','268','250'];
    $scope.men.style.height=$scope.H[index]+'px';
  }
  $scope.leave = function(index){
    $scope.index=null;
    $scope.men.style.height=0;
  }
  $scope.icon=document.querySelector('.nav_list_show');
  $scope.icon.style.height=0;
  $scope.up = function(){
      $scope.icon.style.height=240+'px';
  }
})