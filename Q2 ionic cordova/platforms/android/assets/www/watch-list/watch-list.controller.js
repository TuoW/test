angular.module('app.controllers', [])

.controller('WatchListController', function ($scope, WatchList, GenreList, $localStorage) {
    
    if (!$localStorage.watchedId) {
        $localStorage.watchedId = [];
    }

    $scope.period = "weekly";
    $scope.genre = "action";
    $scope.type = "movies";

    $scope.periodChange = function (period) {
        $scope.period = period;
        $scope.update();
    }

    $scope.typeChange = function (type) {
        $scope.type = type;
        $scope.getGenreList();
        $scope.update();
    }

    $scope.genreChange = function (genre) {
        $scope.genre = genre;
        $scope.update();
    }

    //save watched Imdb in localStroage 
    $scope.watched = function (imdb) {
        $localStorage.watchedId.push(imdb)
    }
    
    $scope.isWatched = function (imdb) {
        var result = false;
        if (!$localStorage.watchedId) {
            return false;
        }
        angular.forEach($localStorage.watchedId, function (value, index) {
            
            if (value == imdb) {
                result = true
            }

        })
        return result;
    }

    //get default genrel watch list
    GenreList.getList($scope.type)
        .success(function (data) {
            if (data) {
                $scope.genreList = angular.fromJson(data);
                console.log($scope.genreList);
            } else {
                "no data"
            }
        })
        .error(function (data, status, headers) {
            alert(status + "<br>" + data);

        });
    //get default most watched list   
    WatchList.getList($scope.type, $scope.period, $scope.genre)
        .success(function (data) {
            if (data) {
                $scope.List = angular.fromJson(data);
                console.log($scope.List);
            } else {
                "no data"
            }
        })
        .error(function (data, status, headers) {
            alert(status + "<br>" + data);

        })
    // update genre list
    $scope.getGenreList =function (){
        GenreList.getList($scope.type)
        .success(function (data) {
            if (data) {
                $scope.genreList = angular.fromJson(data);
                console.log($scope.genreList);
            } else {
                "no data"
            }
        })
        .error(function (data, status, headers) {
            alert(status + "<br>" + data);

        });
    }
    
    // update watch list
    $scope.update = function () {
        console.log("update");
        WatchList.getList($scope.type, $scope.period, $scope.genre)
        .success(function (data) {
            if (data) {
                $scope.List = angular.fromJson(data);
                console.log(data)
            } else {
                "no data"
            }
        })
        .error(function (data, status, headers) {
            alert(status + "<br>" + data);

        })
    }
})