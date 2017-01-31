angular
    .module("application", ["ngRoute", "koldata"])
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
    .run(["$users", function ($users) {
        $users.init(window.initial_data.users);
    }]);




angular
    .module("application")
    .controller("UsersController", ["$scope", "$users", function ($scope, $users) {
        $scope.users = $users;
    }]);


angular
    .module("application")
    .controller("NewUserController", ["$scope", "$users", function ($scope, $users) {
        $scope.users = $users;
    }]);


angular
    .module("application")
    .controller("ActiveDirectoryUsersController", ["$scope", function ($scope) {

    }]);