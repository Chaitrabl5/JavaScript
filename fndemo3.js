const products=[
    {
        id:4,
        name:"Iphone14",
        price:75456.5
    },
    {
        id:2,
        name:"oneplus11",
        price:55456.5
    },
    {
        id:1,
        name:"Samsungflip",
        price:45456.5
    }
]
console.log(products)
console.log("Size",products.length)

// const sorted= function(p1,p2){
//     return p1.price-p2.price
// }

const sorted=(p1,p2)=> p1.price-p2.price

const sorted1=products.sort(sorted)
console.log("Sorted",sorted1)