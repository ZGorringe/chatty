'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService() {
    return {

    	getMessage: function(){
    		return $http({
    			method: 'GET',
    			url:'http://localhost:8500'
    		}).then(function(data) {
    			return data.data;
    		})
    	},

    	postMessage: function(){
    		return $http({
    			method: 'PUT',
    			url: 'http://localhost:8500',
    			data: {text: newChat}
    		}).then(function(data) {
    			return data.data;
    		})
    	}
    }

  });
