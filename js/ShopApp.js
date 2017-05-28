angular.module("ShopApp", ['ui.router'])
    .config(onConfig);
    onConfig.$inject = ['$compileProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function onConfig ($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|file|filesystem):/);
        $stateProvider
            .state('market', {
                url: '/market',
                templateUrl: 'market/market.html'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'cart/cart.html'
            });

        $urlRouterProvider.otherwise('market');
    };
