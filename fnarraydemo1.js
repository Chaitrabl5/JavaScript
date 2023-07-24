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
function fifty(p1){
    if(p1.price>=50000){
        console.log(p1.name)
     }
}
products.forEach(fifty)


products.forEach(p=>{if(p.price>=50000){
    console.log(p.name)}
})

const filterByPrice=products=>products.filter(p=>p.price>=50000)
    console.log(filterByPrice(products))


function imperative(products){
    let result=[]
    for(let i=0;i<products.length;i++){
        if(products[i].price>=50000){
            result.push(products[i].name)
        }
    }
    return result
}


