angular
    .module("koldata", ["homunculus"])
    .config([function () {}])
    .run([function () {}]);


angular.module("koldata")
    .factory("$users", ["$log", "$http", function ($log, $http) {

        var api = {

            add: function (parameters) {
                if (parameters === undefined) {
                    $log.error("$users -> add: Не задан параметр - данные пользователя");
                    return false;
                }

                var params = {
                    action: "addUser",
                    data: {
                        departmentId: parameters.departmentId,
                        divisionId: parameters.divisionId,
                        surname: parameters.surname,
                        name: parameters.name,
                        fname: parameters.fname,
                        position: parameters.position,
                        email: parameters.email,
                        password: parameters.password,
                        isAdministrator: parameters.isAdministrator
                    }
                };

                $http.post("/serverside/api.php", params)
                    .success(function (data) {

                    })
                    .error();
            }

        };

        return api;
    }]);