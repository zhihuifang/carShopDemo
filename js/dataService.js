angular.module("ShopApp")
    .service('DataService', function ($timeout ) {
        // 内部变量
        var self = this;
        items = [
            {name: "海尔电视", price: 2000, quantity: 2, sum:0},
            {name: "长虹电视", price: 3000, quantity: 1, sum:0},
            {name: "联想电视", price: 4000, quantity: 3, sum:0},
        ];

        // 对外接口：数据
        self.items = items;
        self.totalAmount = 0; //这个既是内部使用，也是外部使用，因为他不是地址引用的对象， 只是简单的值变量

        // 对外接口：处理函数
        self.add = add;
        self.subtract = subtract;

        // 内部具体实现
        function add(index) {
            self.items[index].quantity++;
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
            for (i = 0; i < n; i++) {
                item = self.items[i];
                item.sum = item.price * item.quantity;
                self.totalAmount += item.sum;
            }
        }
        $timeout(update);
    });
