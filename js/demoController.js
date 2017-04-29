angular.module("ShopApp")
.controller('DemoController', function (DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.items = DataService.items;
        self.add = DataService.add;
        self.subtract = DataService.subtract;
});
