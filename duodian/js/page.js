app.controller("page",["$scope","$http",function($scope,$http){
	   $http({
	   	 method:"GET",
	   	 url:"./static/duodian.json",
	   }).success(function(res){
	   	  console.log(res.con)
		   $scope.con = res.con;
	   }).error(function(err){
	   	  console.log(err)
	   })
}])