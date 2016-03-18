'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['datatables'])
  .controller('ProductsController', function($scope, $filter, $state, $stateParams, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    var productId = $stateParams.id || "";

    var productLists = [{
      "product_id": "p1000",
      "name": "iPhone",
      "description": "The most powerful phone in the world",
      "qty": 99,
      "prices": {
        "mrp": 699,
        "dlp": 599,
        "regular": 650
      },
      "category_ids": ["c111"],
      "image": ""
    },
    {
      "product_id": "p1001",
      "name": "Apple watch",
      "description": "Wearable smart watch",
      "qty": 20,
      "prices": {
        "mrp": 349,
        "dlp": 299,
        "regular": 349
      },
      "category_ids": ["c111", "c112"],
      "image": ""
    }];

    var categotyLists = [{
      "category_id": "c111",
      "name": "Electronics",
      "title": "Home, Entertainment and Auto",
      "subTitle": ""
    },
    {
      "category_id": "c112",
      "name": "Apparel",
      "title": "Apparel & Accessories",
      "subTitle": ""
    },
    {
      "category_id": "c113",
      "name": "Grocery",
      "title": "Foods & Beverages",
      "subTitle": ""
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

    vm.product = [];

    function init() {
      if (productId) {
        vm.getProduct(productId);
      } else {
        // all data
        vm.products = vm.getCategoriesAndProducts();
      }
      // onRouteChangeOff = $rootScope.$on('$locationChangeStart', routeChange);
    }

    vm.getProduct = function(id) {
      vm.product = $filter('filter')(productLists, {product_id: id})[0];
      vm.product.categories = vm.getCategoriesById(vm.product.category_ids);
      // window.scrollTo(0, 0);
    };

    vm.getCategoriesById = function(catIds) {
      var categories = [];
      catIds.forEach(function(catId){
        categories.push($filter('filter')(categotyLists, {category_id: catId})[0]);
      });
      return categories;
    };

    vm.getCategoriesAndProducts = function() {
      productLists.forEach(function(product){
        // product.category_ids.forEach(function(catId){
        //   categories.push(vm.getCategoriesById(catId));
        // });
        product.categories = vm.getCategoriesById(product.category_ids);
      });

      return productLists;
    };

    init();

  });
