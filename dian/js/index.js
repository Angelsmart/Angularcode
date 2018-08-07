var app = angular.module("myapp",["ui.router"])
	app.controller("firstCtrl",["$scope",function($scope){
		 $scope.arr=[
	        {name:'首页',path:'page'},
	        {name:'关于我们',gg:"关于多点",dd:"多点新模式",ff:"发展历程",path:'aboutus'},
	        {name:'商务合作',gg:"商超合作",dd:"供应商合作",ff:"媒体合作",path:'business-coo'},
	        {name:'媒体专区',path:'media'},
	        {name:'加入我们',path:'joinus'}
	    ]
		
	}])
	app.config(function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise("/")
		$stateProvider
		.state('page',{
			url:"/",
			templateUrl:'./component/page.html',
			controller:"page"
		})
		.state('aboutus',{
			url:"/aboutus",
			templateUrl:'./component/aboutus.html'
		})
		.state('business-coo',{
			url:"/business",
			templateUrl:'./component/business-coo.html',
		})
		.state('media',{
			url:"/media",
			templateUrl:'./component/media.html',
		})
		.state('joinus',{
			url:"/joinus",
			templateUrl:'./component/joinus.html',
		})
	})