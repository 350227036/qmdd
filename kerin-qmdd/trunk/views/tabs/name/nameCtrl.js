var app = angular.module('myApp.name',[])
.controller('nameCtrl',['$scope','$http',function($scope,$http){
	$scope.select = {
		lastName:'陈',
		word1S:0,
		word2S:0,
		word1P:'木',
		word2P:'水',
//		strokes:0
	}
	$scope.result = [
//		lastName:$scope.select.lastName,
//		word1:'',
//		word2:''
	];
//	查询功能功
	$scope.selectBtn = function(){
		$scope.result = [];
		if($scope.select.word1P == '' || $scope.select.word2P == '' || $scope.select.word1S == 0 || $scope.select.word2S == 0){
			alert('都必须要选值');
		}else{
			$http({
			    method: 'POST',
			    headers:{'Content-Type':'application/x-www-form-urlencoded'},
			    url: 'http://localhost/trunk/app/name/controller/getName.php',
			    data:$scope.select
			}).then(function successCallback(response) {
	//		        console.log(response.data.data);
	
			        $scope.arr1 = response.data.data[0];
			        $scope.arr2 = response.data.data[1];
	//		        	生成结果集
					$scope.generateNames();
					console.log($scope.result);
			    }, function errorCallback(response) {
			        // 请求失败执行代码
			});
		}


	}
//	剔除功能
//	数组1删除
	$scope.del1 = function(word){
		var index =  $scope.arr1.indexOf(word);
		$scope.arr1.splice(index,1);
		$scope.generateNames();
	}
//	数组2删除
	$scope.del2 = function(word){
		var index =  $scope.arr2.indexOf(word);
		$scope.arr2.splice(index,1);
		$scope.generateNames();
	}
//	结果组合功能
	$scope.generateNames = function(){
		$scope.result=[];
        for(var i=0;i<$scope.arr1.length;i++){
        	for(var j=0;j<$scope.arr2.length;j++){
				var name = {
					lastName:$scope.select.lastName,
					word1:$scope.arr1[i].word,
					word1P:$scope.arr1[i].property,
					word2:$scope.arr2[j].word,
					word2P:$scope.arr2[j].property
				}
				$scope.result.push(name);
        	}
        }
	}
}]);