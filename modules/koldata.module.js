angular
    .module("koldata", ["homunculus", "classes"])
    .config([function () {}])
    .run([function () {}]);


angular.module("koldata")
    .factory("$users", ["$log", "$http", "$classes", "$factory", function ($log, $http, $classes, $factory) {
        var users = [];
        var newUser = $factory({ classes: ["AppUser", "Model", "Backup", "States"], base_class: "AppUser" });

        var api = {

            init: function (source) {
                if (source === undefined) {
                    $log.error();
                    return false;
                }

                var length = source.length;
                for (var i = 0; i < length; i++) {
                    var user = $factory({ classes: ["AppUser", "Model", "Backup", "States"], base_class: "AppUser" });
                    user._model_.fromJSON(source[i]);
                    users.push(user);
                }
                $log.log(users);

                return true;
            },


            getAll: function () {
                return users;
            },


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
                        var newUser = $factory({ classes: ["AppUser", "Model", "Backup"], base_class: "AppUser" });
                        newUser._model_.fromJSON(data);
                        newUser._backup_.setup();
                        users.push(newUser);
                        return true;
                    })
                    .error();
            }

        };

        return api;
    }]);