const apiCall = async(userId) => {
    try{
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await result.json()
    console.log(data)
}catch(e) {
    console.error(e)
}
}

apiCall(2)
