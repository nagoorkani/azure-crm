'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('badges',function() {
    	return {
  		templateUrl:'scripts/directives/dashboard/badges/badges.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'title': '@',
        'number': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}

  	};
  });
