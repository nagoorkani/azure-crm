'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['datatables'])
  .controller('InvoiceController', function($scope, $filter, $state, $stateParams, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var orderId = $stateParams.id || "";

    var invoiceList = [{
      "invoice_id": "i001",
      "account": {
        "name": "ABC company",
        "address": {
          "city": "Minneapolis",
          "country": "United States",
          "landmark": "Downtown",
          "state": "MN",
          "street": "110 W Grant St",
          "zip": 55403
        },
        "email": "contact@ak.com",
        "phone": {
          "home": ["2093240200", "6153240200"],
          "mobile": ["6123240200", "6123240200"],
          "office": ["9523240200", "6153240200"]
        }
      },
      "payments": [
        { "payment_due": 100, "payment_date": "10/10/2015", "payment_mode": "cash" },
        { "payment_due": 300, "payment_date": "20/10/2015", "payment_mode": "card" }
      ],
      "order_date": "10-Feb-2016",
      "order_id": orderId,
      "filfillment_date": "",
      "taxes": {
        "sales": 2.5,
        "vat": 7
      },
      "shipping_cost": 100,
      "items": [{
        "item_id": "p1000",
        "name": "iPhone",
        "qty": 2,
        "cost": 650,
        "discount": 2
      },
      {
        "item_id": "p1001",
        "name": "Apple Watch",
        "qty": 1,
        "cost": 349,
        "discount": 2
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

    vm.invoice = {};

    function init() {
      if (orderId) {
        vm.generateInvoice();
      }
    }

    vm.generateInvoice = function() {
      // get orders
      // get accounts
      invoiceList[0].date = $filter('date')(new Date(), 'dd-MMM-yyyy');
      invoiceList[0].seller = vm.getSellerDetails();
      invoiceList[0].account = vm.getAccountDetails();
      vm.invoice = invoiceList;
    };

    vm.getAccountDetails = function() {
      return {
        "name": "ABC company",
        "proprietor": "Seeni",
        "account_id": "A1010",
        "address": {
          "city": "Minneapolis",
          "country": "United States",
          "landmark": "Downtown",
          "state": "MN",
          "street": "110 W Grant St",
          "zip": 55403
        },
        "email": "contact@ak.com",
        "phone": {
          "home": ["2093240200", "6153240200"],
          "mobile": ["6123240200", "6123240200"],
          "office": ["9523240200", "6153240200"]
        }
      };
    };

    vm.getOrderItems = function(orderId) {
      // vm.order = $filter('filter')(ordersList, {order_id: orderId})[0];
      // vm.orders.forEach(function(order){
      //   vm.getOrderAndItems(order.order_id);
      // });

      return [{
        "product_id": "p1000",
        "name": "iPhone",
        "description": "The most powerful phone in the world",
        "qty": 99,
        "cost": 699,
        "category_ids": ["c111"],
        "image": ""
      },
      {
        "product_id": "p1001",
        "name": "Apple watch",
        "description": "Wearable smart watch",
        "qty": 20,
        "cost": 349,
        "category_ids": ["c111", "c112"],
        "image": ""
      }];
    };

    vm.getSellerDetails = function() {
      return {
        "name": "Luluu INC",
        "email": "info@luluu.com",
        "address": {
          "street": "Bus stand",
          "city": "Devakottai",
          "district": "Sivagangai",
          "state": "Tamilnadu",
          "zip": 55403,
          "country": "India"
        },
        "phone": {
          "home": ["2093240200", "6153240200"],
          "mobile": ["6123240200", "6123240200"],
          "office": ["9523240200", "6153240200"]
        }
      }
    };

    init();

  });
