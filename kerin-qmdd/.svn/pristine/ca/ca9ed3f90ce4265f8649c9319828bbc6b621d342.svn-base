var app = angular.module('myApp.tabs',[])
.controller('tabsCtrl',['$scope',function($scope){
	$scope.lis = [
		{
			'text':'起名字',
			'isActive':true,
			'href':'#/tabs/name'
		},
		{
			'text':'录入字典',
			'isActive':false,
			'href':'#/tabs/words'
		},
		{
			'text':'已起名字',
			'isActive':false,
			'href':'#/tabs/words'
		},
	];
	$scope.nav = function(x){
		for(var i=0;i<$scope.lis.length;i++){
			$scope.lis[i].isActive = false;
		}
		var index = $scope.lis.indexOf(x);
		$scope.lis[index].isActive = true;
	}
}]);