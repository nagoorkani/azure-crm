'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['datatables'])
  .controller('OrdersController', function($scope, $filter, $state, $stateParams, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var orderId = $stateParams.id || "";

    var orderLists = [{
      "order_id": "c001",
      "order_date": "10-Feb-2016",
      "filfillment_date": "",
      "total": 1649,
      "account_id": 1,
      "items": [{
        "item_id": "p1000",
        "name": "iPhone",
        "qty": 2,
        "cost": 650,
        "discount": 2,
        "fulfillment_date": "15-Feb-2016"
      },
      {
        "item_id": "p1001",
        "name": "Apple Watch",
        "qty": 1,
        "cost": 349,
        "discount": 2,
        "fulfillment_date": "12-Feb-2016"
      }]
    },
    {
      "order_id": "c002",
      "order_date": "20-Jan-2016",
      "total": 3490,
      "account_id": 2,
      "items": [{
        "item_id": "p1001",
        "name": "iPhone",
        "qty": 5,
        "cost": 650,
        "discount": 10,
        "fulfillment_date": ""
      }]
    }];


    // vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    //        return $resource(data).query().$promise;
    //    }).withPaginationType('full_numbers');
    //
    //    vm.dtColumns = [
    //        DTColumnBuilder.newColumn('id').withTitle('ID'),
    //        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
    //        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    //    ];

    vm.order = [];

    function init() {
      if (orderId) {
        vm.getOrder(orderId);
      } else {
        // all data
        vm.getAllOrders();
      }
      // onRouteChangeOff = $rootScope.$on('$locationChangeStart', routeChange);
    }

    vm.getOrderAndItems = function(id) {
      vm.order = $filter('filter')(vm.getAllOrders(), {order_id: orderId})[0];
      // vm.order.items.forEach(function(item){
      //   item.isCompleted = orderStatus(item.fulfillment_date);
      // });
    };

    vm.getAllOrders = function() {
      vm.orders = orderLists;
      // vm.orders.forEach(function(order){
      //   vm.getOrderAndItems(order.order_id);
      // });
    };

    vm.orderStatus = function orderStatus(item) {
      return item === "" ? 'pending' : 'completed';
    }

    init();

  });
