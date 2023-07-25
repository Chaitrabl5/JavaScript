function getproduct(name,price,rating){
    return{
        name,
        getprice(){
            return price;
        },
        rating
    }
}
console.log(getproduct('iphone',75456,4.6).getprice())