'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {

  	var getChats = function() {	
  		MessageService.getMessage().then(function(data) {
  			$scope.messages = data
  			console.log($scope.messages)
  		});
	};

	getChats();

	$scope.addChat = function() {
		MessageService.postMessage($scope.newChat).then(function(data){
			console.log(data);
			getChats();
			$scope.newChat = '';
		})
	}

  });
