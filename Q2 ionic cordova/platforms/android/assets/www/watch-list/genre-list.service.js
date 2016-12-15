angular.module('app.services')
    .factory('GenreList', ['APIResource', function (APIResource) {

        var service = {
            getList: getList
        };

        return service;

        function getList(type) {
           return APIResource.getData('GET', 'https://api.trakt.tv/genres/' + type)
                
        }


    }])
