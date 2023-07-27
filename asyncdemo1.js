const asyncFunction=function(){
setTimeout(function(){
    console.log('Inside Settimeout')},0)
}

asyncFunction()
console.log('after Timeout')