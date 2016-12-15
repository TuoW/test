angular.module('app.services', [])
    .factory('APIResource',['$http', function ($http) {
//trackt.tv API token
        var clientId = "49321c0c2c2803527ff9dac75482a2ea80294b5038996ad828106a427f8e5dce";

        var service = {
            getData: getData,
        };

        return service;

        function getData(Method, APILink) {

            var req = {
                method: Method,
                url: APILink,
                
                headers: {
                    'Content-Type':'application/json',
                    'trakt-api-version':'2',
                    'trakt-api-key':clientId
                },
                
            };
            return $http(req);
                
        }

       

    }])
