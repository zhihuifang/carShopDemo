angular.module("ShopApp")
.controller('cartController',cartController);
    DemoController.$inject = ['$state', 'DataService'];
    function cartController ($state,DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.select = DataService.select;
        self.selectGoods = DataService.selectGoods;
        self.add = DataService.add;
        self.subtract = DataService.subtract;
        self.gotoMarket = gotoMarket;
        self.gotoCart = gotoCart;
        function gotoMarket() {
                $state.go('market');
        }
        function gotoCart() {
                $state.go('cart');
        }
};
