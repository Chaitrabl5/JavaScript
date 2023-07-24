var order={
    orderid:12345,
    isactive:true
}
console.log( typeof order)

console.log(order.orderid)

console.log(order.isactive)

//console.log(order[orderid])
var canceledorders=[1001,1010,2020,1099]
console.log( typeof canceledorders)

console.log(canceledorders instanceof Array)

var pendingOrders=new Array(1001,1010,2020,1099)

console.log(typeof pendingOrders)

console.log(pendingOrders instanceof Array)

function cancelorders(orderid)
{

};

console.log(typeof cancelorders)