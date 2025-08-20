var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaultOrder = {
    id: 0,
    customer: "John",
    items: [],
    status: "pending"
};
function createOrder(customer, items) {
    return __assign(__assign({}, defaultOrder), { id: Date.now(), customer: customer, items: items });
}
function updateOrder(order, updates) {
    return __assign(__assign({}, order), updates);
}
function getOrderSummary(order) {
    return "".concat(order.customer, " - ").concat(order.status, ": ").concat(order.items.length, " items");
}
var newOrder = createOrder("Alice", ["Book", "Pen"]);
var updatedOrder = updateOrder(newOrder, { status: "shipped" });
console.log(getOrderSummary(updatedOrder));
