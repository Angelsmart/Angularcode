var app=angular.module('myapp',['ui.router'])

app.controller('ctrl',['$scope',function($scope){
    $scope.arr=[
        {name:'首页',path:'/'},
        {name:'了解APP',path:'knowapp'},
        {name:'长租公寓',path:'longrent'},
        {name:'短租民宿',path:'shortRent'},
        {name:'招募房东',path:'recruitLandlord'},
        {name:'品牌商入口',path:'brands'}
    ]
}])

app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
       $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/',
            {
                url:'/',
                templateUrl:'comment/page.html'

            }
        )
        .state('knowapp',
            {
                url:'/knowapp',
                templateUrl:'comment/knowapp.html'

            }
        )
        .state('longrent',
            {
                url:'/longrent',
                templateUrl:'comment/longrent.html'

            }
        )
        .state('shortRent',
            {
                url:'/shortRent',
                templateUrl:'comment/shortRent.html',controller:'shortRent'

            }
        )
        .state('recruitLandlord',
            {
                url:'/recruitLandlord',
                templateUrl:'comment/recruit.html'

            }
        )
        .state('brands',
        	{
        		url:'/brands',
                templateUrl:'comment/brands.html'
        	}
        )
}])

app.controller('loop',['$scope','$interval',function($scope,$interval){
    $scope.name=[
        {img:'./img/lun1.gif'},
        {img:'./img/lun2.gif'},
        {img:'./img/lun3.gif'},
        {img:'./img/lun4.gif'},
        {img:'./img/lun5.jpg'}
    ]
    $scope.index=0
    $scope.tim=$interval(function(){
        $scope.index++
        if($scope.index>4){
            $scope.index=0
        }
    },3000)

    $scope.mouse=function(){
        $scope.$on('$destroy',function(){
            $interval.cancel($scope.tim);
        })
    }
}])

app.controller('fot',['$scope',function($scope){
    $scope.tel="联系电话：023-67728163";
    $scope.address="重庆住多多科技有限责任公司 网站备案/许可证号： 渝ICP备17011499号-1";
}])