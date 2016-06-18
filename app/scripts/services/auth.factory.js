/**
 * Created by z062281 on 6/18/16.
 */
(function() {
    'use strict';

    function AuthFactory($http, $window) {

        var API_ENDPOINT = 'http://localhost:7979';
        var API_TOKEN = 'azure-token';

        var auth = {};

        auth.saveToken = function (token){
            $window.localStorage[API_TOKEN] = token;
        };

        auth.getToken = function (){
            return $window.localStorage[API_TOKEN];
        }

        auth.isLoggedIn = function(){
            var token = auth.getToken();

            if(token){
                var payload = JSON.parse($window.atob(token.split('.')[1]));

                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        auth.currentUser = function(){
            if(auth.isLoggedIn()){
                var token = auth.getToken();
                var payload = JSON.parse($window.atob(token.split('.')[1]));

                return payload.username;
            }
        };

        auth.register = function(user){
            return $http.post(API_ENDPOINT + '/register', user).success(function(data){
                auth.saveToken(data.token);
            });
        };

        auth.logIn = function(user){
            return $http.post(API_ENDPOINT + '/login', user).success(function(data){
                auth.saveToken(data.token);
            });
        };

        auth.logOut = function(){
            $window.localStorage.removeItem(API_TOKEN);
        };

        return auth;
    }

    angular.module('sbAdminApp')
        .factory('AuthService', AuthFactory);

    AuthFactory.$inject = ['$http', '$window'];

}());
