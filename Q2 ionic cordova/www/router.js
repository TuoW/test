angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider){ 
    $urlRouterProvider.otherwise('/watchList')

    $stateProvider.state('home', {
        url: '/watchList',
        templateUrl: 'watch-list/watch-list.html',
        controller: 'WatchListController'
    })

    

});