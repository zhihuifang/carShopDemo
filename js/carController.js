angular.module("ShopApp")
.controller('carController', function (DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.select = DataService.select;
        self.newGood = DataService.newGood;
        self.add = DataService.add;
        self.subtract = DataService.subtract;
});
