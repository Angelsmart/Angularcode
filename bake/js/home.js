app.controller('home',['$scope','$location',function($scope,$location){
		$scope.name = "明";
		$scope.arr=[
		 {textb:"Gift Cards",path:"home.Gift"},
		 {textb:"Blog",path:"home.Blog"},
		 {textb:"Starbucks Rewards",path:"home.Starbucks"},
		 {textb:"Coffeehouse",path:"home.Coffeehouse"},
		 {textb:"Menu",path:"Menu"},
		 {textb:"TEA",path:"home.TEA"},
		 {textb:"Social Impact",path:"home.Social"},
         {textb:"Coffee",path:"home.Coffee"},
        ];
        $scope.log=function(){
        	$location.path("/home/page")
			}
	}])
