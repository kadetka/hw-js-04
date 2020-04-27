// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection (arr, minPrice, maxPrice){
    let productCollection = arr.filter(value => value.price >= minPrice && value.price <= maxPrice);
    
    productCollection.sort(function(a,b){
        if (a.price > b.price) {
            return 1;
          }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    });
    
    return productCollection;
}

console.log(filterCollection(products, 15, 30))