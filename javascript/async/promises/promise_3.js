const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("got the user");
        let i = false
        if (i === true){

        resolve({user: "ed"});
        }
        else{
        reject({user: "dimiki"});
        }
    },2000)
});


promise.then(usrer => {
    console.log(usrer);
}).catch(err => {
    console.log(err)
})

