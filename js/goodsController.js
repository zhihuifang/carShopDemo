angular.module("ShopApp")
.controller('DemoController', function (DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.goods = DataService.goods;
});
