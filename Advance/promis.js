const promis=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('asyn run');
        resolve()
    },1000)
})
promis.then(function () {
    console.log('consumed');
    
})


new  Promise(function (resolve,reject) {
    console.log('waitng');
    resolve({username:'anuj',age:'22'})
}).then(function (user) {
    console.log(user);
    
})


fetch('https://randomuser.me/api/').then(function (responce) {
    return responce.json()
}).then(function (responce) {
    console.log(responce);
}).catch(function (error) {
    console.log(error);
    
})