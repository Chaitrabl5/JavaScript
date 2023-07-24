const swap=function(){
    let a=10;
    let b=15;
    // b=b-a;
    // a=a+b;
    // b=a-b;
    // console.log(a);
    // console.log(b);
    [a,b]=[b,a]
    console.log("a=",a,"b=",b);
let products=['iphone14','oneplus11','samsungFlip']
let [product1,,product2]=products

console.log("product",product1,'product',product2);


}
swap()
