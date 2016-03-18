'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
    var vm = this;

    vm.badgeData = [
      { title: 'New orders', value: 10, color: 'primary', type: 'shopping-cart' },
      { title: 'New tasks', value: 23, color: 'success', type: 'check' },
      { title: 'Total Sales', value: 34, color: 'green', type: 'signal' },
      { title: 'Stocks', value: 20, color: 'red', type: 'table' },
    ];

  });
