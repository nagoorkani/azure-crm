'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('StoreController', function(StoreDataService, $stateParams) {
        var vm = this;

        // get store and cart from service
        vm.store = StoreDataService.store;
        vm.cart = StoreDataService.cart;

        // use routing to pick the selected product
        if ($stateParams.productSku != null) {
            vm.product = vm.store.getProduct($stateParams.productSku);
        }

    });
