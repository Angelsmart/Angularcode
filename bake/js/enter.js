app.controller('enter',['$scope','$location',function($scope,$location){
		    $scope.name = "登录";
			$scope.text = "";
			$scope.Password = "";
			$scope.btn = function(){
				if($scope.text==''){
	             alert("请输入手机号")
	             return false;    
		        }
				if(!/^1\d{10}$/.test($scope.text)){ 
		    	    alert("请输入正确的手机号")
		             return false; 
		      	} 
		      	if($scope.Password==''){
		             alert("请输入密码")
		             return false;    
		      	}
		      	else{
		      		$location.path("/home/page")
		      	}
			}
			
	}])
