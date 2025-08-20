var products = [
    { name: "Pen", price: 12 },
    { name: "Laptop", price: 1200 },
];
function getProductNames(items) {
    return items.map(function (item) { return item.name; });
}
console.log(getProductNames(products));
