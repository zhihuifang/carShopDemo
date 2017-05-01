angular.module("ShopApp")
    .service('DataService', function ($timeout ) {
        // 内部变量
        var self = this;
        items = [
            {name: "海尔电视", price: 2000, quantity: 0, sum:0, inventory:100, describe:"海尔电视是一款高清便宜性价比高的电视"},
            {name: "长虹电视", price: 3000, quantity: 0, sum:0, inventory:100, describe:"长虹电视是一款高清便宜性价比高的电视"},
            {name: "联想电视", price: 4000, quantity: 0, sum:0, inventory:100, describe:"联想电视是一款高清便宜性价比高的电视"},
        ];

        // 对外接口：数据
        self.items = items;
        self.totalCount = 0;
        self.totalAmount = 0; //这个既是内部使用，也是外部使用，因为他不是地址引用的对象， 只是简单的值变量

        // 对外接口：处理函数
        self.add = add;
        self.subtract = subtract;

        // 内部具体实现
        function add(index) {
            self.items[index].quantity++;
            self.items[index].inventory--;
            $timeout(update);
        }

        function subtract(index) {
            self.items[index].quantity--;
            $timeout(update);
        }

        function update() {
            var i,
                n = self.items.length,
                item;

            self.totalAmount = 0;
            self.totalCount = 0;
            for (i = 0; i < n; i++) {
                item = self.items[i];
                item.sum = item.price * item.quantity;
                self.totalAmount += item.sum;
                self.totalCount += item.quantity;
            }
        }
        $timeout(update);
    });
