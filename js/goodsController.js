angular.module("ShopApp")
.controller('goodsController', function (DataService) {
    // 内部变量
        var self = this;
        self.data = DataService;
        self.goods = DataService.goods;
        self.selectGoods = selectGoods;
        var selectGoods = [];
        var selected = self.goods[index];
        var selectGood = {
            name: selected.name,
            price: selected.price,
            inventory:selected.inventory,
            describe:selected.describe,
            sum: 0,
            quantity: 1
        };
        self.selectGoods.push(selectGood);
});
