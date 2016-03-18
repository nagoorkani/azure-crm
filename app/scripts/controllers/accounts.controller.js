'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AccountsController', function($scope, $filter, $state, $stateParams) {
    var vm = this;
    var accId = parseInt($stateParams.id) || 0;

    var accountLists = [{
      "address": {
        "city": "Minneapolis",
        "country": "United States",
        "landmark": "Downtown",
        "state": "MN",
        "street": "110 W Grant St",
        "zip": 55403
      },
      "email": "contact@ak.com",
      "id": 1,
      "image": "",
      "name": "AK",
      "phone": {
        "home": ["2093240200", "6153240200"],
        "mobile": ["6123240200", "6123240200"],
        "office": ["9523240200", "6153240200"]
      },
      "subsidiary": [],
      "branches": [],
      "franchises": [],
      "proprietor": ["Arun Kalyanaraman"],
      "type": "IT",
      "url": "www.ak.com"
    }, {
      "address": {
        "city": "Devakottai",
        "country": "India",
        "landmark": "bus stand",
        "state": "Tamilnadu",
        "district": "Sivagangai",
        "street": "550, ABC complex",
        "zip": 64040
      },
      "email": "contact@luluu.com",
      "id": 2,
      "image": "",
      "name": "luluu",
      "phone": {
        "home": ["456454", "67234"],
        "mobile": ["9845000124", "9923423994"],
        "office": ["34534544", "56752332"]
      },
      "subsidiary": [],
      "branches": [],
      "franchises": [],
      "proprietor": ["seeni"],
      "type": "retailer",
      "url": "www.luluu.com"
    }];
    vm.account = [];

    function init() {
      if (accId > 0) {
        vm.getAcccount(accId);
      } else {
        // all data
        vm.accounts = accountLists;
      }
      // onRouteChangeOff = $rootScope.$on('$locationChangeStart', routeChange);
    }

    vm.getAcccount = function(id) {
      vm.account = $filter('filter')(accountLists, {id: id})[0];
      window.scrollTo(0, 0);
    };

    init();
  });
