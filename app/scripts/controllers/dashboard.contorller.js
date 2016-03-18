'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DashboardController', function($scope,$position) {
    var vm = this;

    vm.badges = [
      { text: 'New orders', number: 10, color: 'primary', type: 'shopping-cart' },
      { text: 'New tasks', number: 23, color: 'success', type: 'check' },
      { text: 'Total Sales', number: 34, color: 'green', type: 'signal' },
      { text: 'Stocks', number: 20, color: 'red', type: 'table' },
    ];

  });
