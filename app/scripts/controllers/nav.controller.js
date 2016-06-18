'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('NavController', function($scope, AuthService) {
    var vm = this;

    vm.isLoggedIn = AuthService.isLoggedIn;
    vm.currentUser = AuthService.currentUser;
    vm.logOut = AuthService.logOut;

  });
