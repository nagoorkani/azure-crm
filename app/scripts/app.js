'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $urlRouterProvider
    .when('/accounts/:id', function(){
      console.log('accounts/id');
    })
      .otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: [
                  'scripts/directives/header/header.js',
                  'scripts/directives/header/header-notification/header-notification.js',
                  'scripts/directives/sidebar/sidebar.js',
                  'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                ]
              }),
              $ocLazyLoad.load({
                name: 'toggle-switch',
                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                  "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                ]
              }),
              $ocLazyLoad.load({
                name: 'ngAnimate',
                files: ['bower_components/angular-animate/angular-animate.js']
              })
            $ocLazyLoad.load({
              name: 'ngCookies',
              files: ['bower_components/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load({
              name: 'ngResource',
              files: ['bower_components/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load({
              name: 'ngSanitize',
              files: ['bower_components/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load({
              name: 'ngTouch',
              files: ['bower_components/angular-touch/angular-touch.js']
            })
          }
        }
      })
      .state('dashboard.home', {
        url: '/home',
        controller: 'MainCtrl',
        templateUrl: 'views/dashboard/home.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: [
                'scripts/controllers/main.js',
                'scripts/directives/timeline/timeline.js',
                'scripts/directives/notifications/notifications.js',
                'scripts/directives/chat/chat.js',
                'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        },
        controllerAs: 'main'
      })
      //   .state('dashboard.ihome',{
      //     url:'/ihome',
      //     controller: 'DashboardController',
      //     templateUrl:'views/dashboard/dashboard.html',
      //     resolve: {
      //       loadMyFiles:function($ocLazyLoad) {
      //         return $ocLazyLoad.load({
      //           name:'sbAdminApp',
      //           files:[
      //           'scripts/controllers/dashboard.contorller.js',
      //           'scripts/directives/timeline/timeline.js',
      //           'scripts/directives/notifications/notifications.js',
      //           'scripts/directives/chat/chat.js',
      //           'scripts/directives/dashboard/badges/badges.js'
      //           ]
      //         });
      //       }
      //     },
      //     controllerAs: 'dashboard'
      //   })
      //   .state('dashboard.form',{
      //     templateUrl:'views/form.html',
      //     url:'/form'
      // })
      .state('dashboard.accounts', {
        url: '/accounts',
        controller: 'AccountsController',
        templateUrl: 'views/accounts/accounts.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/accounts.controller.js']
            });
          }
        },
        controllerAs: 'accounts'
      })
      .state('dashboard.accountsdetail', {
        url: '/accounts/:id',
        controller: 'AccountsController',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/accounts.controller.js']
            });
          }
        },
        templateUrl: 'views/accounts/account.html',
        controllerAs: 'accounts'
      })
      .state('dashboard.products', {
        url: '/products',
        controller: 'ProductsController',
        templateUrl: 'views/products/products.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/products.controller.js']
            });
          }
        },
        controllerAs: 'products'
      })
      .state('dashboard.productsdetail', {
        url: '/products/:id',
        controller: 'ProductsController',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/products.controller.js']
            });
          }
        },
        templateUrl: 'views/products/product.html',
        controllerAs: 'products'
      })
      .state('dashboard.orders', {
        url: '/orders',
        controller: 'OrdersController',
        templateUrl: 'views/orders/orders.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/orders.controller.js']
            });
          }
        },
        controllerAs: 'orders'
      })
      .state('dashboard.sales', {
        url: '/sales',
        controller: 'SalesController',
        templateUrl: 'views/sales/sales.items.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/sales.controller.js']
            });
          }
        },
        controllerAs: 'sales'
      })
      .state('dashboard.store', {
        url: '/store',
        controller: 'StoreController',
        templateUrl: 'views/store/store.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/store.controller.js', 'scripts/services/storedata.service.js']
            });
          }
        },
        controllerAs: 'store'
      })
      .state('dashboard.cart', {
        url: '/cart',
        controller: 'StoreController',
        templateUrl: 'views/store/cart.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/store.controller.js', 'scripts/services/storedata.service.js']
            });
          }
        },
        controllerAs: 'store'
      })
      .state('dashboard.invoice', {
        url: '/order/:id/invoice',
        controller: 'InvoiceController',
        templateUrl: 'views/invoice/invoice.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: ['scripts/controllers/invoice.controller.js']
            });
          }
        },
        controllerAs: 'invoice'
      })
      .state('dashboard.blank', {
        templateUrl: 'views/pages/blank.html',
        url: '/blank'
      })
      .state('login', {
        templateUrl: 'views/pages/login.html',
        url: '/login'
      })
      .state('dashboard.chart', {
        templateUrl: 'views/chart.html',
        url: '/chart',
        controller: 'ChartCtrl',
        resolve: {
          loadMyFile: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'chart.js',
                files: [
                  'bower_components/angular-chart.js/dist/angular-chart.min.js',
                  'bower_components/angular-chart.js/dist/angular-chart.css'
                ]
              }),
              $ocLazyLoad.load({
                name: 'sbAdminApp',
                files: ['scripts/controllers/chartContoller.js']
              })
          }
        }
      })
      .state('dashboard.table', {
        templateUrl: 'views/table.html',
        url: '/table'
      })
      .state('dashboard.panels-wells', {
        templateUrl: 'views/ui-elements/panels-wells.html',
        url: '/panels-wells'
      })
      .state('dashboard.buttons', {
        templateUrl: 'views/ui-elements/buttons.html',
        url: '/buttons'
      })
      .state('dashboard.notifications', {
        templateUrl: 'views/ui-elements/notifications.html',
        url: '/notifications'
      })
      .state('dashboard.typography', {
        templateUrl: 'views/ui-elements/typography.html',
        url: '/typography'
      })
      .state('dashboard.icons', {
        templateUrl: 'views/ui-elements/icons.html',
        url: '/icons'
      })
      .state('dashboard.grid', {
        templateUrl: 'views/ui-elements/grid.html',
        url: '/grid'
      })
  }]);
