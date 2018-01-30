var app = angular.module('myApp',[
						'ui.router',
						'myApp.tabs',
						'myApp.name',
						'myApp.words',
])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('tabs',{
		url:'/tabs',
		templateUrl:'views/tabs/tabs.html',
		controller:'tabsCtrl'
	})
	.state('tabs.name',{
		url:'/name',
		templateUrl:'views/tabs/name/name.html',
		controller:'nameCtrl'
	})
	.state('tabs.words',{
		url:'/words',
		templateUrl:'views/tabs/words/words.html',
		controller:'wordsCtrl'
	})
	
	
	$urlRouterProvider.otherwise('/tabs/name');
})