app.controller('homeCtrl',function($scope,$http){
  $scope.cons=[];
  $http.get('./json/data.json').then(function(response){
    console.log(response);
    $scope.cons = response.data.con;
  }).catch(function(error){
    console.log(error)
  })
})