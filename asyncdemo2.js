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

var filterByprice= function(cb){
    setTimeout(function(){       
       cb(products.filter(products=>products.price>=50000))
},1000)
}

filterByprice(function(result){console.log(result)})

console.log("outside timeout")
let num = '5';
console.log(num + 5);
function foot() {
    return "bar";
  }
  console.log( foot() );

  function foo(a, b, c) {  console.log( b );}foo( 4, 5, 6 );

  let fooo = {  alpha: 1,  beta: 2};
  console.log(fooo.beta)