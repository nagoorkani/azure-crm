'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AuthController', function($scope, $state, AuthService) {
    var vm = this;

    vm.user = {};

    vm.register = function () {
      AuthService.register(vm.user).error(function (error) {
        vm.error = error;
      }).then(function () {
        $state.go('dashboard.home');
      });
    };

    vm.logIn = function(){
      AuthService.logIn(vm.user).error(function(error){
        vm.error = error;
      }).then(function(){
        $state.go('dashboard.home');
      });
    };

  });
