app.controller("page",["$scope","$http",function($scope,$http){
	   $scope.yuan = "电商配送",
	   $scope.title = "多点超市",
	   $scope.detail = "货源来自于附近超市门店，既可保证同货同价，又可享受电商配送到家。",
	   $scope.qiu = "全球精选",
	   $scope.ju = " 汇聚全球优质商品，100%正品保障，引导用户感受全新购物趋势。",
	  
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