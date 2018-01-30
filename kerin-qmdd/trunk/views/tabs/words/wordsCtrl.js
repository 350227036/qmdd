var app = angular.module('myApp.words',[])
.controller('wordsCtrl',['$scope','$http',function($scope,$http){
//	插入选项
	$scope.newWord = {
		word:'',
		property:'',
		strokes:0
	}
//	查询选项
	$scope.select = {
		word:'',
		property:'',
		strokes:0
	}
	//所有结果
	$scope.result = [];
//	分页结果
	
	$scope.pageResult = [];
	//重置
	$scope.reset = function(){
			$scope.select = {
		word:'',
		property:'',
		strokes:0
	}
	}
//	查询功能功
	$scope.selectBtn = function(select){
		$http({
		    method: 'POST',
		    headers:{'Content-Type':'application/x-www-form-urlencoded'},
		    url: 'http://localhost/trunk/app/words/controller/getWords.php',
		    data:select
		}).then(function successCallback(response) {
		        console.log(response.data);
		        $scope.result = response.data.data;
		        $scope.result.reverse();
		        console.log($scope.result.length);
		        $scope.curPage = 1;
		        $scope.chpage(0);
		    }, function errorCallback(response) {
		        // 请求失败执行代码
		});
	}
//	插入功能
	$scope.addBtn = function(newWord){
		console.log(newWord);
		if(newWord.word !='' && newWord.property !='' && newWord.strokes !=0){

			$http({
			    method: 'POST',
			    headers:{'Content-Type':'application/x-www-form-urlencoded'},
			    url: 'http://localhost/trunk/app/words/controller/addWords.php',
			    data:newWord
			}).then(function successCallback(response) {
			        console.log(response.data);
			        $scope.newWord.word='';
			        $scope.selectBtn();
			    }, function errorCallback(response) {
			        // 请求失败执行代码
			});
		}else{
			alert('必须键入值');
		}
	}
//	删除功能
	$scope.delBtn = function(delWord){
		console.log(delWord);
		var r=confirm("确定删除 "+delWord.word+" wid:"+delWord.wid+" 属："+delWord.property+"，笔画:"+delWord.strokes);
		if (r==true){
			$http({
			    method: 'POST',
			    headers:{'Content-Type':'application/x-www-form-urlencoded'},
			    url: 'http://localhost/trunk/app/words/controller/delWords.php',
			    data:delWord
			}).then(function successCallback(response) {
			        console.log(response.data);
			        $scope.selectBtn();
			    }, function errorCallback(response) {
			        // 请求失败执行代码
			});
		}
		else{
		    alert('取消删除');
		}
	}
	
	//分页功能
	$scope.curPage = 1;
//	每页数据
	$scope.pageNums = 10;
	$scope.chpage = function(num){

		$scope.curPage+=num;
		if($scope.curPage <= 0){
			alert('已经是第一页');
			$scope.curPage = 1;
		}else if($scope.curPage >= parseInt($scope.result.length/$scope.pageNums)+1){
			alert('已经是最后一页');
			$scope.curPage = parseInt($scope.result.length/$scope.pageNums)+1;
			$scope.pageResult=[];
			for(var i = ($scope.curPage-1)*$scope.pageNums ;i<$scope.result.length;i++){
				var word = $scope.result[i];
				$scope.pageResult.push(word);
				console.log($scope.pageResult);
			}
		}else{
			$scope.pageResult=[];
			for(var i = ($scope.curPage-1)*$scope.pageNums ;i<$scope.curPage*$scope.pageNums;i++){
				var word = $scope.result[i];
				$scope.pageResult.push(word);
				console.log($scope.pageResult);
			}
		}

	};
}]);