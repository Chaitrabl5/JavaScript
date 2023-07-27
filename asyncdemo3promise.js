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

var filterByprice= function(){
    return new Promise((resolve,reject)=>{
    setTimeout(function(){  
        if(products){   
       resolve(products.filter(products=>products.price>=50000))
          }
else{
    reject(new Error("No products"))
    }
},1000)
    })
}
//then is considered as promise fulfillment handler
//catch is considered as promise failure handler
const promise= filterByprice()
promise.then(result=>{console.log(result)})
.catch(err=>{console.log(err)})
console.log("outside timeout")