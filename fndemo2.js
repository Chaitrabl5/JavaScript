//'use strict'
//pocessorder('A2345')
//console.log('product name:',productname)
var pocessorder=function pocessorder(orderid){
    productname='iphone12'
    console.log('Processing Order',orderid)
}
//console.log('product name',productname)
pocessorder('A2345')
console.log('product name:',productname)

var processorder=function(orderid='0000'){
    console.log('Processing Order',orderid)
}
processorder()

var t=99.99;
var fs;
var sav;
if(t>=100.00)
{
    fs=true;
    sav=29.5;
}
else{
    fs=false;
    sav=0;
}
console.log(sav);


