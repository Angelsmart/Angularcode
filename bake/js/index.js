var app = angular.module("myapp",["ui.router"])
	app.controller("firstCtrl",["$scope",function($scope){
		
	}])
	app.config(function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise("/enter")
		$stateProvider
		.state('enter',{
			url:"/enter",
			templateUrl:'./component/enter.html',
			controller:'enter'
		})
		.state('home',{
			url:"/home",
			templateUrl:'./component/home.html',
			controller:'home'
		})
		
        .state('home.page',
            {
                url:'/page',
                templateUrl:'./component/router/page.html',
                controller:'page'
            }
        )
        .state('home.Coffee',
            {
                url:'/Coffee',
                templateUrl:'./component/router/Coffee.html'

            }
        )
        .state('home.Social',
            {
                url:'/Social',
                templateUrl:'./component/router/Social.html'

            }
        )
        .state('home.TEA',
            {
                url:'/TEA',
                templateUrl:'./component/router/TEA.html'

            }
        )
        .state('home.Menu',
            {
                url:'/Menu',
                templateUrl:'./component/router/Menu.html'

            }
        )
        .state('home.Coffeehouse',
            {
                url:'/Coffeehouse',
                templateUrl:'./component/router/Coffeehouse.html'

            }
        )
        .state('home.Starbucks',
            {
                url:'/Starbucks',
                templateUrl:'./component/router/Starbucks.html'

            }
        )
        .state('home.Blog',
            {
                url:'/Blog',
                templateUrl:'./component/router/Blog.html'

            }
        )
        .state('home.Gift',
            {
                url:'/Gift',
                templateUrl:'./component/router/Gift.html'

            }
        )
	})