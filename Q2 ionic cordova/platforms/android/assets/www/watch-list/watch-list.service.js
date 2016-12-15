angular.module('app.services')
    .factory('WatchList', ['APIResource',function (APIResource) {
        
        var service = {
            getList: getList
        };

        return service;

        function getList(type,period,genre) {
           return APIResource.getData('GET', 'https://api.trakt.tv/' + type + '/watched/' + period + '?genres=' + genre)
                
        }


    }])
