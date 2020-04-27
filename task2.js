// Есть массив объектов. Отсортировать их по возрастающему количеству ядер (cores).

let product = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

product.sort(function(a,b){
    if (a.info.cores > b.info.cores) {
        return 1;
      }
    if (a.info.cores < b.info.cores) {
        return -1;
    }
    return 0;
});

console.log(product);