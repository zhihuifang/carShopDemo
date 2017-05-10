angular.module("ShopApp")
.controller('goodsController', function (DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.goods = DataService.goods;
        self.addGood = DataService.addGood;
        self.addInventory = DataService.addInventory;
});
