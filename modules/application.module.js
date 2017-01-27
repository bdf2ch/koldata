angular
    .module("application", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/templates/users/users.html",
                controller: "UsersController"
            })
            .when("/new-user", {
                templateUrl: "/templates/users/new-user.html",
                controller: "NewUserController"
            })
            .when("/ad-users", {
                templateUrl: "/templates/users/ad-users.html",
                controller: "ActiveDirectoryUsersController"
            });
    }])
    .run([function () {

    }]);




angular
    .module("application")
    .controller("UsersController", ["$scope", function ($scope) {

    }]);


angular
    .module("application")
    .controller("NewUserController", ["$scope", function ($scope) {

    }]);


angular
    .module("application")
    .controller("ActiveDirectoryUsersController", ["$scope", function ($scope) {

    }]);